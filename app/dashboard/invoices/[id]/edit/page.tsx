import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { InvoiceForm } from '@/app/lib/definitions';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

    // Transform the invoice into the correct type: InvoiceForm
    const invoiceForm: InvoiceForm = {
        id: invoice!.id,
        customer_id: invoice!.customer_id,
        amount: invoice!.amount,
        status: invoice!.status
      };

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoiceForm} customers={customers} />
        </main>
    );
}