//app/actions/actions.ts

'use server'

import { revalidatePath } from 'next/cache'
import { User } from './schemas'
import { cache } from 'react'
import { prisma } from '@/lib/prisma'

export async function searchUsers(query: string): Promise<User[]> {
    console.log('Searching users with query:', query)
    
    const people = await prisma.person.findMany({
        where: {
            name: {
                contains: query
            }
        },
        orderBy: {
            name: 'asc'
        }
    })
    
    console.log('Search results:', people)
    return people
}

export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    const newUser = await prisma.person.create({
        data: {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber
        }
    })
    
    revalidatePath('/')
    return newUser
}

export async function deleteUser(id: string): Promise<void> {
    await prisma.person.delete({
        where: { id }
    })
    
    console.log(`User with id ${id} has been deleted.`)
    revalidatePath('/')
}

export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    const updatedUser = await prisma.person.update({
        where: { id },
        data: {
            ...(data.name && { name: data.name }),
            ...(data.email && { email: data.email }),
            ...(data.phoneNumber && { phoneNumber: data.phoneNumber })
        }
    })
    
    console.log(`User with id ${id} has been updated.`)
    revalidatePath('/')
    
    return updatedUser
}

export const getUserById = cache(async (id: string) => {
    const user = await prisma.person.findUnique({
        where: { id }
    })
    return user || null
})

export async function getAllUsers(): Promise<User[]> {
    const users = await prisma.person.findMany({
        orderBy: {
            name: 'asc'
        }
    })
    return users
}
