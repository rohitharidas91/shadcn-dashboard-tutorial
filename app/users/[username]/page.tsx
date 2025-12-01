import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, Shield, Candy, Citrus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppRadialChart } from "@/components/AppRadialChart";

const UserPage = () => {
  return (
    <div className="p-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col xl:flex-row gap-8 ">
        {/*Left*/}
        <div className="w-full xl:w-1/3 space-y-6">
          {/*User Badges Container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              {/*Verified User Badge*/}
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-2 border-blue-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified user</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is verified
                  </p>
                </HoverCardContent>
              </HoverCard>

              {/*Admin Badge*/}
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-red-500/30 border-2 border-red-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is an admin
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/*Contributor Badge*/}
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-green-500/30 border-2 border-green-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Contributor</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is a contributor
                  </p>
                </HoverCardContent>
              </HoverCard>
              {/*Popular Badge*/}
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-2 border-yellow-500/50 p-1"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user is popular
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/*User Information Container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <EditUser />
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile completion
                </p>
                <Progress value={33} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="font-bold">Username: </span>
                  <span className="text-muted-foreground">JohnDoe</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Email: </span>
                  <span className="text-muted-foreground">jdoe@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Location: </span>
                  <span className="text-muted-foreground">New York</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Joined: </span>
                  <span className="text-muted-foreground">2 years ago</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Role: </span>
                  <Badge>Admin</Badge>
                </div>
              </div>
            </div>
          </div>
          {/*User Card List Container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="User Cards" />
          </div>
        </div>
        {/*Right*/}
        <div className="w-full xl:w-2/3 space-y-6">
          {/*User Card Container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar className="rounded-full h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold">John Doe</h1>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet ducimus omnis quo accusamus atque quos tenetur.
                  Repellat laboriosam ducimus illum, provident atque, deleniti,
                  rem consequatur consequuntur impedit ullam autem perferendis!
                </p>
              </div>
            </div>
          </div>
          {/*Chart Container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppRadialChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
