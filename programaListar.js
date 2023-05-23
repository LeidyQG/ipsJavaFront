class TableEngine{


    async render(){
        const response= await fetch('http://localhost:3000/listar/medicos')
        const table= await response.json()

        const tableHtml=document.createElement("table")
        tableHtml.classList.add("container")

        for (const [key, value] of Object.entries(table.properties)){

            const row=document.createElement('row')
            row.innerText=key
            tableHtml.appendChild(row)
            const column=document.createElement('column')
            column.name=value
            row.appendChild(column)
            tableHtml.appendChild(column)
        }
        document.body.appendChild(tableHtml)
    }
}

const miTableEngine = new TableEngine()
miTableEngine.render()