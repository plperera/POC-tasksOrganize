function getActiveTasks(req, res) {
    var tasks = [
        {
            id: 1,
            description: "Limpar Sala",
            active: true
        },
        {
            id: 2,
            description: "Limpar Cozinha",
            active: true
        },
        {
            id: 3,
            description: "Limpar Quarto",
            active: true
        }
    ];
    res.send(tasks.filter(function (e) { return e.active === true; }));
}
export { getActiveTasks };
