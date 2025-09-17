// Mock data functions for development without database
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';

// Mock data
const mockRevenue: Revenue[] = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const mockLatestInvoices: LatestInvoiceRaw[] = [
  {
    id: '1',
    amount: 15795,
    name: 'Evil Rabbit',
    image_url: '/customers/evil-rabbit.png',
    email: 'evil@rabbit.com',
  },
  {
    id: '2', 
    amount: 20348,
    name: 'Delba de Oliveira',
    image_url: '/customers/delba-de-oliveira.png',
    email: 'delba@oliveira.com',
  },
  {
    id: '3',
    amount: 3040,
    name: 'Lee Robinson', 
    image_url: '/customers/lee-robinson.png',
    email: 'lee@robinson.com',
  },
  {
    id: '4',
    amount: 44800,
    name: 'Michael Novotny',
    image_url: '/customers/michael-novotny.png', 
    email: 'michael@novotny.com',
  },
  {
    id: '5',
    amount: 34577,
    name: 'Amy Burns',
    image_url: '/customers/amy-burns.png',
    email: 'amy@burns.com',
  },
];

const mockInvoices = [
  {
    id: '1',
    customer_id: '1',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
    date: '2024-12-06',
    amount: 15795,
    status: 'pending' as const,
  },
  {
    id: '2', 
    customer_id: '2',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
    date: '2024-12-05',
    amount: 20348,
    status: 'paid' as const,
  },
  {
    id: '3',
    customer_id: '3',
    name: 'Lee Robinson',
    email: 'lee@robinson.com', 
    image_url: '/customers/lee-robinson.png',
    date: '2024-12-04',
    amount: 3040,
    status: 'paid' as const,
  },
  {
    id: '4',
    customer_id: '4',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
    date: '2024-12-03', 
    amount: 44800,
    status: 'pending' as const,
  },
  {
    id: '5',
    customer_id: '5',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
    date: '2024-12-02',
    amount: 34577,
    status: 'paid' as const,
  },
  {
    id: '6',
    customer_id: '6',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
    date: '2024-12-01',
    amount: 54246,
    status: 'pending' as const,
  },
];

export async function fetchRevenue() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockRevenue;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    const latestInvoices = mockLatestInvoices.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
    return latestInvoices;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}

export async function fetchCardData() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));

    const numberOfInvoices = mockInvoices.length;
    const numberOfCustomers = 6; 
    const totalPaidInvoices = formatCurrency(
      mockInvoices.filter(invoice => invoice.status === 'paid')
        .reduce((sum, invoice) => sum + invoice.amount, 0)
    );
    const totalPendingInvoices = formatCurrency(
      mockInvoices.filter(invoice => invoice.status === 'pending')
        .reduce((sum, invoice) => sum + invoice.amount, 0)
    );

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    // Filter by query if provided
    let filteredInvoices = mockInvoices;
    if (query) {
      filteredInvoices = mockInvoices.filter(
        (invoice) =>
          invoice.name.toLowerCase().includes(query.toLowerCase()) ||
          invoice.email.toLowerCase().includes(query.toLowerCase()) ||
          invoice.status.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    // Pagination
    const ITEMS_PER_PAGE = 6;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedInvoices = filteredInvoices.slice(offset, offset + ITEMS_PER_PAGE);
    
    return paginatedInvoices;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    let filteredInvoices = mockInvoices;
    if (query) {
      filteredInvoices = mockInvoices.filter(
        (invoice) =>
          invoice.name.toLowerCase().includes(query.toLowerCase()) ||
          invoice.email.toLowerCase().includes(query.toLowerCase()) ||
          invoice.status.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    const ITEMS_PER_PAGE = 6;
    const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);
    
    return totalPages;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    const invoice = mockInvoices.find(inv => inv.id === id);
    if (!invoice) {
      return null;
    }
    
    // Convert amount from cents to dollars
    const invoiceWithDollarAmount = {
      ...invoice,
      amount: invoice.amount / 100,
    };
    
    return invoiceWithDollarAmount;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    const customers = [
      { id: '1', name: 'Evil Rabbit' },
      { id: '2', name: 'Delba de Oliveira' },
      { id: '3', name: 'Lee Robinson' },
      { id: '4', name: 'Michael Novotny' },
      { id: '5', name: 'Amy Burns' },
      { id: '6', name: 'Balazs Orban' },
    ];
    
    return customers;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    
    const customers = [
      {
        id: '1',
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        image_url: '/customers/evil-rabbit.png',
        total_invoices: 2,
        total_pending: formatCurrency(15795 + 666),
        total_paid: formatCurrency(0),
      },
      {
        id: '2',
        name: 'Delba de Oliveira',
        email: 'delba@oliveira.com', 
        image_url: '/customers/delba-de-oliveira.png',
        total_invoices: 2,
        total_pending: formatCurrency(20348),
        total_paid: formatCurrency(500),
      },
    ];
    
    if (query) {
      return customers.filter(customer => 
        customer.name.toLowerCase().includes(query.toLowerCase()) ||
        customer.email.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    return customers;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}