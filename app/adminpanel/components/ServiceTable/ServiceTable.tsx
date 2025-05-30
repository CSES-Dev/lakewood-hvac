"use client";

import { FieldDefinition, TemplateTable } from "../TemplateTable/Table";
import ServiceRow from "./ServiceRow";
import { Service } from "@/models/Service";

type ServiceTableProps = {
    services: Service[];
    onEdit: (service: Service) => void;
    onDelete: (id: number) => void;
    onAddClick: () => void;
};

export default function ServiceTable({
    services,
    onEdit,
    onDelete,
    onAddClick,
}: ServiceTableProps) {
    const serviceTableFields: FieldDefinition[] = [
        { name: "Title", align: "left" },
        { name: "Description", align: "left" },
        { name: "Image", align: "left" },
    ];

    return (
        <TemplateTable
            title={"Services"}
            fields={serviceTableFields}
            onAddClick={onAddClick}
            addButtonText={"Add Service"}
        >
            {services.map((service) => (
                <ServiceRow
                    key={service.id}
                    service={service}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </TemplateTable>
    );
}
