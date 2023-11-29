if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = [
        {
            name: 'Каталог товаров',
            hasChildren: true,
            items: [
                {
                    name: 'Мойки',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran1',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'SMT1',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'SMT2',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        },
                        {
                            name: 'Ulgran2',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'SMT3',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'SMT4',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        }
                    ]
                }, {
                    name: 'Фильтры',
                    hasChildren: true,
                    items: [
                        {
                            name: 'Ulgran3',
                            hasChildren: true,
                            items: [
                                {
                                    name: 'SMT5',
                                    hasChildren: false,
                                    items: []
                                },
                                {
                                    name: 'SMT6',
                                    hasChildren: false,
                                    items: []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]


    const items = new ListItems(document.getElementById('list-items'), data)


    items.render()

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.render = function () {
            this.renderParent(this.data, this.el);
        };

        this.renderParent = function (data, el) {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach((d) => {
                    const rootDiv = document.createElement("div");
                    rootDiv.classList.add("list-item", "list-item_open");

                    const headDiv = document.createElement("div");
                    headDiv.classList.add("list-item__inner");

                    const imgArrow = document.createElement("img");
                    imgArrow.classList.add("list-item__arrow");
                    imgArrow.src = "assets/img/chevron-down.png";

                    if (d.hasChildren) {
                        imgArrow.addEventListener("click", () =>
                            rootDiv.classList.toggle("list-item_open")
                        );
                    } else {
                        imgArrow.style.visibility = "hidden"
                    }

                    headDiv.appendChild(imgArrow);

                    const imgFolder = document.createElement("img");
                    imgFolder.classList.add("list-item__folder");
                    imgFolder.src = "assets/img/folder.png";
                    headDiv.appendChild(imgFolder);

                    const titleSpan = document.createElement("span");
                    titleSpan.innerText = d.name;
                    headDiv.appendChild(titleSpan);

                    rootDiv.appendChild(headDiv);

                    if (d.hasChildren) {
                        const childDiv = document.createElement("div");
                        childDiv.classList.add("list-item__items");
                        this.renderParent(d.items, childDiv);
                        rootDiv.appendChild(childDiv);
                    }

                    el.appendChild(rootDiv);
                });
            }
        };
    }
}