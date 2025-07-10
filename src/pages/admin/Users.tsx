
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  UserPlus, 
  Edit, 
  Trash, 
  Lock, 
  Unlock,
  Filter,
  AlertCircle
} from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users] = useState<any[]>([]);
  const [loading] = useState(false);
  const [error] = useState("");
  const { toast } = useToast();

  // Placeholder users data until database is set up
  const filteredUsers = users.filter(user => 
    user.first_name && user.last_name && 
    (user.first_name + " " + user.last_name).toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <p className="text-muted-foreground">Manage system users and their permissions</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button size="sm" onClick={() => {
            toast({
              title: "Database Setup Required",
              description: "Please create the user profiles table first to manage users.",
              variant: "destructive",
            });
          }}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kargon-red"></div>
        </div>
      ) : error ? (
        <div className="border rounded-md p-4 flex items-center gap-3 text-red-500">
          <AlertCircle className="h-5 w-5" />
          <p>{error}</p>
        </div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  <div className="flex flex-col items-center gap-2">
                    <AlertCircle className="h-8 w-8 text-yellow-500" />
                    <p>Database tables need to be created first</p>
                    <p className="text-sm text-muted-foreground">
                      Set up user profiles, shipments, and payments tables to manage users
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
