import { subHours, subDays, addDays } from "date-fns"
import type { Invoice } from "../types/invoice"

const now = new Date()

class InvoiceApi {
  getInvoices(): Promise<Invoice[]> {
    const invoices: Invoice[] = [
      {
        id: "5ecb868d0f437390ef3ac62c",
        currency: "$",
        customer: {
          email: "contact@acme.com",
          name: "Facebook",
        },
        dueDate: addDays(now, 5).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: "Madison Williams",
        status: "paid",
        totalAmount: 55.5,
      },
      {
        id: "59d78b0b0e15394130c373ff",
        currency: "$",
        customer: {
          email: "sales@blind-spots.com",
          name: "Events",
        },
        dueDate: addDays(now, 6).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: "Jeffrey Cohen",
        status: "paid",
        totalAmount: 688.9,
      },
      {
        id: "2a05e7f757c35fe823da3c5a",
        currency: "$",
        customer: {
          email: "sales@beauty-clinic.com",
          name: "Events",
        },
        dueDate: addDays(now, 9).getTime(),
        issueDate: subHours(now, 1).getTime(),
        number: "Anton Meade",
        status: "paid",
        totalAmount: 695.2,
      },
      {
        id: "5ecb868ada8deedee0638502",
        currency: "$",
        customer: {
          email: "sales@matt-jason.com",
          name: "Events",
        },
        dueDate: addDays(now, 25).getTime(),
        issueDate: subDays(subHours(now, 5), 2).getTime(),
        number: "Ignacio Lopez",
        status: "pending",
        totalAmount: 23.11,
      },
      {
        id: "750f519b8bc4d21af9528437",
        currency: "$",
        customer: {
          email: "sales@matt-jason.com",
          name: "Saddleback.com",
        },
        dueDate: addDays(now, 17).getTime(),
        issueDate: subDays(subHours(now, 4), 2).getTime(),
        number: "Jennifer Adams",
        status: "pending",
        totalAmount: 253.76,
      },
      {
        id: "5ecb868700aba84d0f1c0e48",
        currency: "$",
        customer: {
          email: "support@terrythomas.io",
          name: "LinkedIn",
        },
        dueDate: addDays(now, 11).getTime(),
        issueDate: subDays(subHours(now, 4), 6).getTime(),
        number: "Marie Johnson",
        status: "canceled",
        totalAmount: 781.5,
      },
      {
        id: "5ecb8682038e1ddf4e868764",
        currency: "$",
        customer: {
          email: "contact@dispatcher.co.uk",
          name: "Saddleback.com",
        },
        dueDate: addDays(now, 3).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: "Monica Lapointe",
        status: "paid",
        totalAmount: 96.64,
      },
      {
        id: "5ecb8682038e1ddf4e868764",
        currency: "$",
        customer: {
          email: "info@novelty.co.uk",
          name: "Instagram",
        },
        dueDate: addDays(now, 1).getTime(),
        issueDate: subDays(subHours(now, 2), 15).getTime(),
        number: "Peter Davison",
        status: "canceled",
        totalAmount: 46.23,
      },
    ]

    return Promise.resolve(invoices)
  }

  getInvoice(): Promise<Invoice> {
    const invoice: Invoice = {
      id: "5ecb86785312dcc69b5799ad",
      currency: "$",
      customer: {
        address: "271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand",
        company: "Countdown Grey Lynn",
        email: "contact@acme.com",
        name: "ACME SRL",
        taxId: "6934656584231",
      },
      dueDate: addDays(now, 5).getTime(),
      issueDate: subHours(now, 1).getTime(),
      items: [
        {
          id: "5ecb8694db1760a701dfbf74",
          currency: "$",
          description: "Freelancer Subscription (12/05/2019 - 11/06/2019)",
          unitAmount: 55.5,
        },
      ],
      number: "INV-0019",
      status: "paid",
      subtotalAmount: 50.0,
      taxAmount: 5.5,
      totalAmount: 55.5,
    }

    return Promise.resolve(invoice)
  }
}

export const invoiceApi = new InvoiceApi()
