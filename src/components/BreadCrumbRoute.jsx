import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
function BreadCrumbRoute({ data }) {
    //     console.log(data.pop());
    console.log(data);
    return (
        <div className="m-4">
            <Breadcrumb>
                <BreadcrumbList>
                    {data.length > 1 && (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    {data[0]}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>
                    )}

                    {data[data.length - 1] && (
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {data[data.length - 1]}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    )}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

export default BreadCrumbRoute;
