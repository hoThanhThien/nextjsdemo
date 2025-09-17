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

    const numberOfInvoices = 12;
    const numberOfCustomers = 6; 
    const totalPaidInvoices = formatCurrency(192543);
    const totalPendingInvoices = formatCurrency(87643);

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
    return [];
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return 1;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}

export async function fetchInvoiceById(id: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return null;
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

export async function fetchCustomers() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [];
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchFilteredCustomers(query: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return [];
  } catch (error) {
    console.error('Mock Data Error:', error);
    throw new Error('Failed to fetch customer table.');
  }
}