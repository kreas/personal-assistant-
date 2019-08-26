import m from 'mithril'

const stubbedUsers = [
  {
    name: 'Tim Warren',
    company: 'Takl',
    address: '1005 Flagpole Ct',
    email: 'tim.warren@takl.com',
    phone_number: '931-797-0810'
  },
  {
    name: 'Christina Warren',
    company: 'KBH',
    address: 'Columbia, TN',
    email: 'christina.warren@takl.com',
    phone_number: '931-797-0810'
  }
]

const ContactsTable = {
  view: () => {
    return m('table', { class: 'table' }, [
      m('thead', [
        m('tr', [
          m('th', 'Name'),
          m('th', 'Company'),
          m('th', 'Address'),
          m('th', 'Email'),
          m('th', 'Phone Number'),
        ])
      ]),

      m('tbody', [
        stubbedUsers.map(user => {
          return m('tr', [
            m('td', user.name),
            m('td', user.company),
            m('td', user.address),
            m('td', user.email),
            m('td', user.phone_number),
          ])
        })
      ])
    ])
  }
}

export class ContactsTableCustomElement extends HTMLElement {
  constructor () {
    super()
  }

  connectedCallback () {
    m.render(this, m(ContactsTable))
  }
}
