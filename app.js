const org1_depts = [
    {
        name: "accounting",
        children: [
            { name: "accounting payable", children: [] },
            { name: "accounting receivable", children: [] }
        ]
    },
    { name: "finance", children: [] }
];

const org2_depts = [
    {
        name: "accounting",
        children: [
            { name: "accounting payable", children: [] },
            {
                name: "accounting receivable",
                children: [
                    { name: "cash", children: [] },
                    { name: "check", children: [] }
                ]
            }
        ]
    },
    { name: "finance", children: [{ name: "investment", children: [] }] }
];


const output = document.getElementById("organization");
let htmlStr =  PrintDepts(org1_depts, "Organization 1") + PrintDepts(org2_depts, "Organization 2");
output.innerHTML = htmlStr;


function PrintDepts(depts,departmentName){
   return  "<h2>"+departmentName+"</h2>" + '<div class= "org-structure">' + CreateList(depts, 0) +"</div>"

}

function CreateList(depts, level) {
    let html = "";
    level = level || 0;

    html += "<ul>";

    for (item in depts) {
        html += '<li class = "level-' + level + '">';

        if (
            typeof depts[item].children === "object" &&
            depts[item].children.length > 0
        ) {
            // An array will return 'object'
            html += depts[item].name /*+"  LEVEL:" + level*/;
            html += CreateList(depts[item].children, level + 1); // Child found. Calling recursively same method
        } else {
            html += depts[item].name /* +"   L:"+level*/;
        }
        html += "</li>";
    }
    html += "</ul>";

    return html;
}
