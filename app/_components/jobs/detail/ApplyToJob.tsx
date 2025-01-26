"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { type ChangeEvent, type FC, useState } from "react";

const ApplyToJob: FC = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [resume, setResume] = useState<File | null>(null);
	const [coverLetter, setCoverLetter] = useState("");
	const { toast } = useToast();

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setResume(event.target.files[0]);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		toast({
			title: "Životopis bol firme poslaný",
			duration: 2000,
			className: "bg-green-800 text-white font-bold",
		});
	};

	return (
		<motion.div
			className="flex justify-center mt-8"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<Button
				size="lg"
				className="w-full md:w-auto text-lg font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
			>
				<Sheet>
					<SheetTrigger>Apply for this job</SheetTrigger>
					<SheetContent className="w-[600px]">
						<SheetHeader>
							<SheetTitle>Are you absolutely sure?</SheetTitle>
							<SheetDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</SheetDescription>
							<form
								onSubmit={handleSubmit}
								className="mt-4 flex flex-col gap-4"
							>
								<Input
									type="text"
									placeholder="Full Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<Input
									type="email"
									placeholder="Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<Input
									type="file"
									accept=".pdf,.doc,.docx"
									onChange={handleFileChange}
									required
								/>
								<Textarea
									placeholder="Cover Letter (optional)"
									value={coverLetter}
									onChange={(e) => setCoverLetter(e.target.value)}
								/>
								<Button
									type="submit"
									className="bg-primary hover:bg-primary/90"
								>
									Submit Application
								</Button>
							</form>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</Button>
		</motion.div>
	);
};

export default ApplyToJob;
