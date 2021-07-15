

var tab=[
    {
        name:"sarah",
        prénom:"soltani",
        age:26,
        image:"https://www.les-supers-parents.com/wp-content/uploads/2011/09/Communication-bebe-sourire.jpg"
    },
    {
        name:"wafa",
        prénom:"soltani",
        age:32,
        image:"https://lh3.googleusercontent.com/proxy/FilJv4FDDKZF3oIlyO6bEZL13XXOTiC0hMheDeGeAslcmeHIEw3BXcOjU1P9ybJvWdDDtCVvX26TwppXt7rqOv2e1IhKebNRD0sH_JBJu5zhymzGbb904YjM-RspH4iNKo2mmcm6bMmG_OKWOvfMYUzc8ePyMmcJkGEA3VIA"
        
    },
    {
        name:"sana",
        prénom:"soltani",
        age:25,
        image:"https://www.regardauteur.com/fr/photos/view/52843/870x0/e3c7757cfa810bd4587cf8ed58c43c1e.jpg"
    }
]


module.exports = {

    getAll: (req, res) => {

        return res.send(tab)

    }

    

}