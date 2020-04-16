function paramsMatter(value, row, index) {
    var values = row.params;
    values = values.replace(/\},/, '},\n');//换行
    var span = document.createElement('span');
    span.setAttribute('title', values);
    span.innerHTML = row.params;
    return span.outerHTML;
}

$('#table-BR').bootstrapTable({
    field: 'params',
    title: "参数",
    width: 300,
    class: 'colStyle', formatter: paramsMatter
    });

