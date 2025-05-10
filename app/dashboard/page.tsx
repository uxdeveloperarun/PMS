import { AppSidebar } from "@/components/app-sidebar"
import { EmployeeChart } from "@/components/dashboard/employee-chart"
import { EmployeeChart02 } from "@/components/dashboard/employee-chart2"
import { DataTable } from "@/components/dashboard/datatable"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card,   CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                  Performance Management System

                  </BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
          <div className="grid px-3 py-3 grid-cols-6 gap-4">
            <div>
              <EmployeeChart/>
            </div>
             <div>
              <EmployeeChart/>
            </div>
             <div>
              <EmployeeChart/>
            </div>
             <div>
              <EmployeeChart/>
            </div>
             <div>
              <EmployeeChart/>
            </div>
             <div>
              <EmployeeChart/>
            </div>            
            

          </div>
          <div className="px-3">
 <EmployeeChart02 />
          </div>
          <div className="px-3 my-5">
  <Card >
            <CardContent>
 <DataTable />
            </CardContent>

          </Card>
          </div>
        
         

          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
