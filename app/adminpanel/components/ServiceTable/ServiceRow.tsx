"use client";

import { basename } from "path";
import TemplateRow from "../TemplateTable/Row";
import { Service } from "@/models/Service";

type ServiceRowProps = {
    service: Service;
    onEdit: (service: Service) => void;
    onDelete: (id: number) => void;
};

export default function ServiceRow({ service, onEdit, onDelete }: ServiceRowProps) {
    return (
        <TemplateRow<Service> item={service} onEdit={onEdit} onDelete={onDelete}>
            <td className="p-4">{service.title}</td>
            <td className="p-4">{service.description}</td>
            <td className="p-4">
                {service.imageUrl ? (
                    <a
                        href={service.imageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                    >
                        {basename(service.imageUrl)}
                    </a>
                ) : (
                    <span>No upload</span>
                )}
            </td>
        </TemplateRow>
    );
}
