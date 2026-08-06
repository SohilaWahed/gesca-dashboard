import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-6">
            <div className="max-w-md text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
                    <ShieldAlert className="h-10 w-10 text-destructive" />
                </div>

                <h1 className="text-6xl font-bold text-foreground">
                    404
                </h1>

                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                    Page Not Found
                </h2>

                <p className="mt-4 text-muted-foreground">
                    The page you're looking for doesn't exist.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <Button onClick={() => navigate(-1)} className="rounded-md">
                        Go Back
                    </Button>

                    <Button
                        variant="outline"
                        onClick={() => navigate("/")}
                        className="rounded-md"
                    >
                        Dashboard
                    </Button>
                </div>
            </div>
        </div>
    );
}