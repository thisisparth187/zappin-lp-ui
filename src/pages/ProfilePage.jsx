import { useState, } from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { FaUser } from "react-icons/fa";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../components/ui/dialog";
import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from "../components/ui/alert-dialog"
import { Input } from "../components/ui/input";

export default function ProfilePage() {
    const [username, setUsername] = useState("Parth");
    const [newUsername, setNewUsername] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUsernameAlertOpen, setIsUsernameAlertOpen] = useState(false);

    const handleSave = () => {
        if (newUsername.trim()) {
            setUsername(newUsername.trim());
            setNewUsername("");
            setIsDialogOpen(false);
        }
        else {
            setIsUsernameAlertOpen(true);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSave();
    };
    const handleDeleteAccount = () => {
        alert("Account Deleted");
    };
    const handleLogout = () => {
        alert("Logged Out");
    };


    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <Card className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-10 rounded-3xl p-10">
                {/* Left: Avatar */}
                <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 ">
                        <AvatarFallback>
                            <FaUser className="text-xl" />
                        </AvatarFallback>
                    </Avatar>
                </div>

                {/* Right: Username and Actions */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <h2 className="text-2xl font-bold">Hey, {username}!</h2>

                    <div className="flex flex-col gap-3 w-48">
                        {/* Dialog Component */}
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    Change Username
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Change your username</DialogTitle>
                                </DialogHeader>
                                <Input
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Enter new username"
                                />
                                <DialogFooter className="mt-4">
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button onClick={handleSave}>Save</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Button variant="destructive" className="w-full hover:bg-[#ff4d55] duration-200">
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button className="w-full">Delete Account</button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account and remove your data.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDeleteAccount}>
                                            Yes, delete it
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </Button>
                        <Button variant="ghost" className="w-full border-2" onClick={() => handleLogout()}>
                            Log out
                        </Button>
                    </div>
                </div>
                <AlertDialog open={isUsernameAlertOpen} onOpenChange={setIsUsernameAlertOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Username is empty</AlertDialogTitle>
                            <AlertDialogDescription>
                                Please enter a new username before saving.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setIsUsernameAlertOpen(false)}>
                                OK
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </Card>
        </div>
    );
}
