"use client"

import { FC } from "react";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "@/components/ui/sheet";

const ApplyToJob: FC = () => {
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
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </Button>
        </motion.div>
    )
}

export default ApplyToJob