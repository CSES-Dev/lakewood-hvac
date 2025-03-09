"use client";

import { Review, ReviewFormModalFields } from "@/models/Review";

type ReviewFormProps = {
    initialData: Review;
    onSubmit: (data: Review) => void;
};

const ReviewForm: React.FC<ReviewFormProps> = ({ initialData, onSubmit }) => {
    return (
        <form className="space-y-4 p-4 border rounded-lg shadow">
            {ReviewFormModalFields.map(({ field, form_label, form_type }) => (
                <div key={field} className="flex flex-col">
                    <label htmlFor={field} className="font-medium">
                        {form_label}
                    </label>
                    {form_type === "textarea" ? (
                        <textarea
                            id={field}
                            name={field}
                            className="border p-2 rounded"
                            rows={3}
                            required
                        />
                    ) : (
                        <input
                            type={form_type}
                            id={field}
                            name={field}
                            className="border p-2 rounded"
                            required
                        />
                    )}
                </div>
            ))}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
};

export default ReviewForm;
