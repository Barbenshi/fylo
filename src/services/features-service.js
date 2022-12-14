export const featureService = {
    query
}


function query() {
    return features
}


const features = [
    {
        class: 'tl',
        path: 'access-anywhere',
        title: 'Access your files, anywhere',
        txt: `The ability to use a smartphone, tablet, or computer to access your account means your files follow
    you everywhere.`
    },
    {
        class: 'tr',
        path: 'security',
        title: 'Security you can trust',
        txt: `2-factor authentication and user-controlled encryption are just a couple of the security features we
    allow to help secure your files.`
    },
    {
        class: 'bl',
        path: 'collaboration',
        title: 'Real-time collaboration',
        txt: `Securely share files and folders with friends, family and colleagues for live collaboration. No email
    attachments required.`
    },
    {
        class: 'br',
        path: 'any-file',
        title: 'Store any type of file',
        txt: `Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file
    types to be securely stored and shared.`
    }
]