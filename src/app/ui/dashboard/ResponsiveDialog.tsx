"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import useIsLargeScreen from "@/hooks/useIsLargeScreen";
import { cn } from "@/lib/utils";
import * as React from "react";
import Label from "./label/label";

interface ResponsiveDialogProps {
    open?: boolean;
    setOpen?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title: string;
    subtitle?: string | null;
    description?: string;
    children: React.ReactNode;
    onClose?: () => void;
}

export function ResponsiveDialog({
    open = false,
    setOpen = () => { },
    trigger,
    title,
    subtitle,
    description,
    children,
    onClose,
}: ResponsiveDialogProps) {
    const [isOpen, setIsOpen] = React.useState(open);
    const isDesktop = useIsLargeScreen();

    return (
        isDesktop ? (
            <Dialog open={trigger ? isOpen : open} onOpenChange={trigger ? setIsOpen : setOpen}>
                <DialogTrigger asChild>{trigger}</DialogTrigger>
                <DialogContent className="bg-white">
                    <DialogHeader>
                        <DialogTitle className="select-none me-10 flex flex-col gap-xs">
                            {title}
                            {subtitle && <Label>{subtitle}</Label>}
                        </DialogTitle>
                        <DialogDescription>{description}</DialogDescription>
                    </DialogHeader>
                    {children}
                </DialogContent>
            </Dialog>) : (
            <Drawer open={trigger ? isOpen : open} onOpenChange={trigger ? setIsOpen : setOpen} onClose={onClose}>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerContent position="bottom" className="max-h-[90dvh]">
                    <DrawerHeader className="text-left">
                        <DrawerTitle
                            className={cn("flex flex-col gap-xs mb-1", {
                                "mb-2": !subtitle,
                            })}
                        >
                            {title}
                            {subtitle && <Label>{subtitle}</Label>}
                        </DrawerTitle>
                        {description && <DrawerDescription>{description}</DrawerDescription>}
                    </DrawerHeader>
                    <div className={cn("px-4 pb-5 flex flex-col gap-4 overflow-auto")}>{children}</div>
                </DrawerContent>
            </Drawer>
        ))
}
