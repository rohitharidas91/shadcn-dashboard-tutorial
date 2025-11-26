"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "./ui/checkbox";
import { Calendar } from "./ui/calendar";
import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
export const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [open, setOpen] = useState(false);
    return (
        <div className="gap-4">
            <h1 className="text-lg font-bold mb-2">To Do List</h1>
            <div className="flex flex-col gap-3 w-full mb-2">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="secondary"
                            id="date"
                            className="w-full flex items-center justify-center font-normal"
                        >
                            <CalendarIcon />
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="max-h-[450px]">
                <ScrollArea className="h-[450px] w-full rounded-md border border-muted p-4 overflow-auto">
                    {/* List Item */}
                    <div className="flex flex-col gap-2">
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-1"></Checkbox>
                            <Label
                                htmlFor="item-1"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </Label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-2"></Checkbox>
                            <label
                                htmlFor="item-2"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-3"></Checkbox>
                            <label
                                htmlFor="item-3"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-4"></Checkbox>
                            <label
                                htmlFor="item-4"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-5"></Checkbox>
                            <label
                                htmlFor="item-5"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-5"></Checkbox>
                            <label
                                htmlFor="item-5"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-5"></Checkbox>
                            <label
                                htmlFor="item-5"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                        <Card className="flex flex-row items-center gap-4 p-4 border border-muted">
                            <Checkbox id="item-5"></Checkbox>
                            <label
                                htmlFor="item-5"
                                className="text-sm text-muted-foreground cursor-pointer"
                            >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </Card>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};
