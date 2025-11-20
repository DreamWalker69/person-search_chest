'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Copy, Edit2, Trash2, RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAllUsers, addUser, getUserById, updateUser, deleteUser } from '@/app/actions/actions';
import { toast } from 'sonner';

interface Person {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export function McpDemoClient() {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('view-all');
  
  // Create form state
  const [createForm, setCreateForm] = useState({ name: '', email: '', phoneNumber: '' });
  const [createLoading, setCreateLoading] = useState(false);
  
  // Get one form state
  const [getOneId, setGetOneId] = useState('');
  const [foundPerson, setFoundPerson] = useState<Person | null>(null);
  const [getOneLoading, setGetOneLoading] = useState(false);
  
  // Update form state
  const [updateId, setUpdateId] = useState('');
  const [updateForm, setUpdateForm] = useState({ name: '', email: '', phoneNumber: '' });
  const [updateLoading, setUpdateLoading] = useState(false);
  
  // Delete form state
  const [deleteId, setDeleteId] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);

  const loadPersons = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setPersons(data);
    } catch (error) {
      console.error('Failed to load persons:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPersons();
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateLoading(true);
    try {
      await addUser(createForm);
      toast.success('Person created successfully!');
      setCreateForm({ name: '', email: '', phoneNumber: '' });
      await loadPersons();
      setActiveTab('view-all');
    } catch (error) {
      toast.error('Failed to create person');
      console.error('Create error:', error);
    } finally {
      setCreateLoading(false);
    }
  };

  const handleGetOne = async (e: React.FormEvent) => {
    e.preventDefault();
    setGetOneLoading(true);
    setFoundPerson(null);
    try {
      const person = await getUserById(getOneId);
      if (person) {
        setFoundPerson(person);
        toast.success('Person found!');
      } else {
        toast.error('Person not found');
      }
    } catch (error) {
      toast.error('Failed to fetch person');
      console.error('Get one error:', error);
    } finally {
      setGetOneLoading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdateLoading(true);
    try {
      await updateUser(updateId, updateForm);
      toast.success('Person updated successfully!');
      setUpdateId('');
      setUpdateForm({ name: '', email: '', phoneNumber: '' });
      await loadPersons();
      setActiveTab('view-all');
    } catch (error) {
      toast.error('Failed to update person');
      console.error('Update error:', error);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeleteLoading(true);
    try {
      await deleteUser(deleteId);
      toast.success('Person deleted successfully!');
      setDeleteId('');
      await loadPersons();
      setActiveTab('view-all');
    } catch (error) {
      toast.error('Failed to delete person');
      console.error('Delete error:', error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteFromTable = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      try {
        await deleteUser(id);
        toast.success('Person deleted successfully!');
        await loadPersons();
      } catch (error) {
        toast.error('Failed to delete person');
        console.error('Delete error:', error);
      }
    }
  };

  const handleEditFromTable = (person: Person) => {
    setUpdateId(person.id);
    setUpdateForm({
      name: person.name,
      email: person.email,
      phoneNumber: person.phoneNumber
    });
    setActiveTab('update');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">All People</h1>
        <p className="text-muted-foreground">
          Interactive view of all person records
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
            {persons.length} records
          </span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={loadPersons}
            disabled={loading}
            className="ml-auto"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="view-all">View All</TabsTrigger>
          <TabsTrigger value="list-api">List API</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="get-one">Get One</TabsTrigger>
          <TabsTrigger value="update">Update</TabsTrigger>
          <TabsTrigger value="delete">Delete</TabsTrigger>
        </TabsList>

        <TabsContent value="view-all">
          <Card>
            <CardHeader>
              <CardTitle>All People</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>ID</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {persons.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                            No records found
                          </TableCell>
                        </TableRow>
                      ) : (
                        persons.map((person) => (
                          <TableRow key={person.id}>
                            <TableCell className="font-medium">{person.name}</TableCell>
                            <TableCell>{person.email}</TableCell>
                            <TableCell>{person.phoneNumber}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <code className="text-xs bg-muted px-2 py-1 rounded">
                                  {person.id.slice(0, 8)}...
                                </code>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard(person.id)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => copyToClipboard(person.id)}
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() => handleEditFromTable(person)}
                                >
                                  <Edit2 className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                                  onClick={() => handleDeleteFromTable(person.id, person.name)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list-api">
          <Card>
            <CardHeader>
              <CardTitle>List API</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: list_all_persons</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Retrieves all person records from the database
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;List all persons in the database&quot;</p>
                  </div>
                </div>

                <Button onClick={loadPersons} disabled={loading} className="w-full">
                  {loading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Execute List API
                    </>
                  )}
                </Button>

                {persons.length > 0 && (
                  <div className="rounded-md border mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {persons.map((person) => (
                          <TableRow key={person.id}>
                            <TableCell className="font-medium">{person.name}</TableCell>
                            <TableCell>{person.email}</TableCell>
                            <TableCell>{person.phoneNumber}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create Person</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: create_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add a new person record with validation
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Create a new person named Alice Smith with email alice@example.com and phone 0412345678&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleCreate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="create-name">Name</Label>
                    <Input
                      id="create-name"
                      value={createForm.name}
                      onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="create-email">Email</Label>
                    <Input
                      id="create-email"
                      type="email"
                      value={createForm.email}
                      onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="create-phone">Phone Number</Label>
                    <Input
                      id="create-phone"
                      value={createForm.phoneNumber}
                      onChange={(e) => setCreateForm({ ...createForm, phoneNumber: e.target.value })}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={createLoading} className="w-full">
                    {createLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Create Person
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="get-one">
          <Card>
            <CardHeader>
              <CardTitle>Get Person by ID</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: get_person_by_id</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Retrieve a specific person record using their ID
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Get person with ID abc123&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleGetOne} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="get-id">Person ID</Label>
                    <Input
                      id="get-id"
                      value={getOneId}
                      onChange={(e) => setGetOneId(e.target.value)}
                      placeholder="Enter person ID"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={getOneLoading} className="w-full">
                    {getOneLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Get Person
                      </>
                    )}
                  </Button>
                </form>

                {foundPerson && (
                  <Card className="mt-6 bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Person Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div>
                        <span className="font-semibold">Name:</span> {foundPerson.name}
                      </div>
                      <div>
                        <span className="font-semibold">Email:</span> {foundPerson.email}
                      </div>
                      <div>
                        <span className="font-semibold">Phone:</span> {foundPerson.phoneNumber}
                      </div>
                      <div>
                        <span className="font-semibold">ID:</span>{' '}
                        <code className="text-xs bg-background px-2 py-1 rounded">
                          {foundPerson.id}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="update">
          <Card>
            <CardHeader>
              <CardTitle>Update Person</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: update_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Modify an existing person record
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Update person abc123 with new email newmail@example.com&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="update-id">Person ID</Label>
                    <Input
                      id="update-id"
                      value={updateId}
                      onChange={(e) => setUpdateId(e.target.value)}
                      placeholder="Enter person ID to update"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-name">Name</Label>
                    <Input
                      id="update-name"
                      value={updateForm.name}
                      onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })}
                      placeholder="Enter new name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-email">Email</Label>
                    <Input
                      id="update-email"
                      type="email"
                      value={updateForm.email}
                      onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
                      placeholder="Enter new email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-phone">Phone Number</Label>
                    <Input
                      id="update-phone"
                      value={updateForm.phoneNumber}
                      onChange={(e) => setUpdateForm({ ...updateForm, phoneNumber: e.target.value })}
                      placeholder="Enter new phone number"
                      required
                    />
                  </div>
                  <Button type="submit" disabled={updateLoading} className="w-full">
                    {updateLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Update Person
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delete">
          <Card>
            <CardHeader>
              <CardTitle>Delete Person</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: delete_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Remove a person record from the database
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Delete person with ID abc123&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleDelete} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="delete-id">Person ID</Label>
                    <Input
                      id="delete-id"
                      value={deleteId}
                      onChange={(e) => setDeleteId(e.target.value)}
                      placeholder="Enter person ID to delete"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={deleteLoading} 
                    variant="destructive" 
                    className="w-full"
                  >
                    {deleteLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 mr-2" />
                        Delete Person
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
