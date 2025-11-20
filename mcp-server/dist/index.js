#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import dotenv from 'dotenv';
// Load environment variables
dotenv.config();
// Initialize Prisma Client
const prisma = new PrismaClient({
    log: ['error', 'warn'],
});
// Validation schemas
const personSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email format'),
    phoneNumber: z.string().regex(/^04\d{8}$/, 'Phone number must be in format 04XXXXXXXX'),
});
const updatePersonSchema = personSchema.partial();
// MCP Server
const server = new Server({
    name: 'person-crud-server',
    version: '1.0.0',
}, {
    capabilities: {
        tools: {},
    },
});
// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: 'create_person',
                description: 'Create a new person in the database',
                inputSchema: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Full name of the person (minimum 2 characters)',
                        },
                        email: {
                            type: 'string',
                            description: 'Email address (must be unique)',
                        },
                        phoneNumber: {
                            type: 'string',
                            description: 'Phone number in format 04XXXXXXXX',
                        },
                    },
                    required: ['name', 'email', 'phoneNumber'],
                },
            },
            {
                name: 'get_person',
                description: 'Get a person by ID',
                inputSchema: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'UUID of the person',
                        },
                    },
                    required: ['id'],
                },
            },
            {
                name: 'search_persons',
                description: 'Search persons by name (case-insensitive)',
                inputSchema: {
                    type: 'object',
                    properties: {
                        query: {
                            type: 'string',
                            description: 'Search query for person name',
                        },
                    },
                    required: ['query'],
                },
            },
            {
                name: 'list_all_persons',
                description: 'List all persons in the database',
                inputSchema: {
                    type: 'object',
                    properties: {},
                },
            },
            {
                name: 'update_person',
                description: 'Update a person by ID',
                inputSchema: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'UUID of the person to update',
                        },
                        name: {
                            type: 'string',
                            description: 'New name (optional)',
                        },
                        email: {
                            type: 'string',
                            description: 'New email (optional)',
                        },
                        phoneNumber: {
                            type: 'string',
                            description: 'New phone number (optional)',
                        },
                    },
                    required: ['id'],
                },
            },
            {
                name: 'delete_person',
                description: 'Delete a person by ID',
                inputSchema: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'string',
                            description: 'UUID of the person to delete',
                        },
                    },
                    required: ['id'],
                },
            },
        ],
    };
});
// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
        switch (name) {
            case 'create_person': {
                const validated = personSchema.parse(args);
                const person = await prisma.person.create({
                    data: validated,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                message: 'Person created successfully',
                                data: person,
                            }, null, 2),
                        },
                    ],
                };
            }
            case 'get_person': {
                const { id } = args;
                const person = await prisma.person.findUnique({
                    where: { id },
                });
                if (!person) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify({
                                    success: false,
                                    error: 'Person not found',
                                }, null, 2),
                            },
                        ],
                    };
                }
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                data: person,
                            }, null, 2),
                        },
                    ],
                };
            }
            case 'search_persons': {
                const { query } = args;
                const persons = await prisma.person.findMany({
                    where: {
                        name: {
                            contains: query,
                            mode: 'insensitive',
                        },
                    },
                    orderBy: {
                        name: 'asc',
                    },
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                count: persons.length,
                                data: persons,
                            }, null, 2),
                        },
                    ],
                };
            }
            case 'list_all_persons': {
                const persons = await prisma.person.findMany({
                    orderBy: {
                        name: 'asc',
                    },
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                count: persons.length,
                                data: persons,
                            }, null, 2),
                        },
                    ],
                };
            }
            case 'update_person': {
                const { id, ...data } = args;
                const validated = updatePersonSchema.parse(data);
                const person = await prisma.person.update({
                    where: { id },
                    data: validated,
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                message: 'Person updated successfully',
                                data: person,
                            }, null, 2),
                        },
                    ],
                };
            }
            case 'delete_person': {
                const { id } = args;
                await prisma.person.delete({
                    where: { id },
                });
                return {
                    content: [
                        {
                            type: 'text',
                            text: JSON.stringify({
                                success: true,
                                message: 'Person deleted successfully',
                            }, null, 2),
                        },
                    ],
                };
            }
            default:
                throw new Error(`Unknown tool: ${name}`);
        }
    }
    catch (error) {
        return {
            content: [
                {
                    type: 'text',
                    text: JSON.stringify({
                        success: false,
                        error: error.message,
                    }, null, 2),
                },
            ],
            isError: true,
        };
    }
});
// Start server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Person CRUD MCP Server running on stdio');
}
main().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
});
