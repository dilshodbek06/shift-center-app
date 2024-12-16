"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Edit, Eye, LoaderCircle, Trash2, X } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

interface StudentGroupCardProps {
  id: string;
  name: string;
  totalStudents: number;
  teacherName: string;
}

export function StudentGroupCard({
  name,
  totalStudents,
  id,
  teacherName,
}: StudentGroupCardProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editingName, setEditingName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleEdit = async () => {
    if (!isEditing) {
      setEditingName(name);
    } else {
      try {
        setLoading(true);
        await axios.patch(`/api/group/${id}`, {
          groupName: editingName,
        });
        router.refresh();
        toast.success("Updated success.");
      } catch (error) {
        toast.error("Something went wrong.", error!);
      } finally {
        setLoading(false);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <Card className="w-full max-w-md hover:translate-y-1 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3">
        {isEditing ? (
          <Input
            onChange={(e) => setEditingName(e.target.value)}
            value={editingName}
            className="w-full max-w-[200px]"
          />
        ) : (
          <CardTitle className="text-lg">{name}</CardTitle>
        )}

        <div className="flex space-x-1">
          <Button variant="ghost" size="icon" onClick={handleEdit}>
            {isEditing ? (
              loading ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <Check className="h-4 w-4" />
              )
            ) : (
              <Edit className="h-4 w-4" />
            )}
          </Button>
          {!isEditing && (
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          )}
          {isEditing && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          {!isEditing && (
            <Button
              onClick={() => router.push(`/admin/group/${id}`)}
              title="view details"
              variant="ghost"
              size="icon"
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="py-0 px-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Teacher:</span> {teacherName}
        </p>
      </CardContent>
      <CardFooter className="p-3">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium">Total students:</span> {totalStudents}
        </p>
      </CardFooter>
    </Card>
  );
}
