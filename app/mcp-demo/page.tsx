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

export default function McpDemoPage() {
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

      <Tabs defaultValue="view-all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6 mb-6">
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
                <div className="pt-4 flex items-center gap-4">
                  <Button onClick={loadPersons} disabled={loading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    {loading ? 'Loading...' : 'Execute List API'}
                  </Button>
                  {persons.length > 0 && (
                    <span className="text-sm text-muted-foreground">
                      {persons.length} person{persons.length !== 1 ? 's' : ''} found
                    </span>
                  )}
                </div>

                {persons.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Results:</h4>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>ID</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {persons.map((person) => (
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
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
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
              <div className="space-y-4">
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
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: get_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fetch a specific person using their UUID
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Get person with id [uuid]&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleGetOne} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="get-id">Person ID</Label>
                    <Input
                      id="get-id"
                      value={getOneId}
                      onChange={(e) => setGetOneId(e.target.value)}
                      placeholder="Enter person UUID"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Copy an ID from the View All tab
                    </p>
                  </div>
                  <Button type="submit" disabled={getOneLoading} className="w-full">
                    {getOneLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>Get Person</>
                    )}
                  </Button>
                </form>

                {foundPerson && (
                  <div className="mt-6 border rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                      <div className="flex-1 space-y-2">
                        <h4 className="font-semibold text-green-900 dark:text-green-100">Person Found</h4>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">Name:</span> {foundPerson.name}</p>
                          <p><span className="font-medium">Email:</span> {foundPerson.email}</p>
                          <p><span className="font-medium">Phone:</span> {foundPerson.phoneNumber}</p>
                          <p className="font-mono text-xs text-muted-foreground">ID: {foundPerson.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: update_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Modify existing person information
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Update person [id] with email newemail@example.com&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="update-id">Person ID</Label>
                    <Input
                      id="update-id"
                      value={updateId}
                      onChange={(e) => setUpdateId(e.target.value)}
                      placeholder="Enter person UUID"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Click edit icon in View All tab or paste UUID here
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-name">Name</Label>
                    <Input
                      id="update-name"
                      value={updateForm.name}
                      onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })}
                      placeholder="Enter new name (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-email">Email</Label>
                    <Input
                      id="update-email"
                      type="email"
                      value={updateForm.email}
                      onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
                      placeholder="Enter new email (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="update-phone">Phone Number</Label>
                    <Input
                      id="update-phone"
                      value={updateForm.phoneNumber}
                      onChange={(e) => setUpdateForm({ ...updateForm, phoneNumber: e.target.value })}
                      placeholder="Enter new phone (optional)"
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
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">MCP Tool: delete_person</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Remove a person record from database
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-6">
                    <p className="text-muted-foreground mb-2">{/* Ask Claude Desktop: */}</p>
                    <p>&quot;Delete person with id [uuid]&quot;</p>
                  </div>
                </div>

                <form onSubmit={handleDelete} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="delete-id">Person ID</Label>
                    <Input
                      id="delete-id"
                      value={deleteId}
                      onChange={(e) => setDeleteId(e.target.value)}
                      placeholder="Enter person UUID to delete"
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Copy an ID from the View All tab
                    </p>
                  </div>
                  
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">Warning</h4>
                        <p className="text-sm text-muted-foreground">
                          This action cannot be undone. The person record will be permanently deleted from the database.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" disabled={deleteLoading} variant="destructive" className="w-full">
                    {deleteLoading ? (
                      <>
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="h-4 w-4 mr-2" />
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
