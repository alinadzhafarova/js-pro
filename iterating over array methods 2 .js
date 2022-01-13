const objects = [
    {
        id: 1,
        displayName: 'Object John',
        date: '10-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 2,
        displayName: 'Object Kate',
        date: '21-06-2020',
        enabled: false,
        relation: {
            relationId: 1
        }
    },
    {
        id: 3,
        displayName: 'Object Bob',
        date: '03-04-2020',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 4,
        displayName: 'Object Alex',
        date: '12-12-2021',
        enabled: false,
        relation: null
    },
    {
        id: 5,
        displayName: 'Object Pooja',
        date: '30-07-2019',
        enabled: true,
        relation: {
            relationId: 4
        }
    },
    {
        id: 6,
        displayName: 'Object Scott',
        date: '15-02-2021',
        enabled: true,
        relation: {
            relationId: 2
        }
    },
    {
        id: 7,
        displayName: 'Object Sergey',
        date: '06-01-2020',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 8,
        displayName: 'Object Adhey',
        date: '21-03-2021',
        enabled: true,
        relation: {
            relationId: 5
        }
    },
    {
        id: 9,
        displayName: 'Object Travis',
        date: '10-08-2021',
        enabled: true,
        relation: {
            relationId: 1
        }
    },
    {
        id: 10,
        displayName: 'Object Artem',
        date: '24-09-2021',
        enabled: false,
        relation: {
            relationId: 4
        }
    },
    {
        id: 11,
        displayName: 'Object Stuart',
        date: '01-04-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 12,
        displayName: 'Object Keith',
        date: '08-05-2020',
        enabled: true,
        relation: {
            relationId: 10
        }
    },
    {
        id: 13,
        displayName: 'Object Bill',
        date: '17-10-2020',
        enabled: true,
        relation: {
            relationId: 9
        }
    },
    {
        id: 14,
        displayName: 'Object Chuck',
        date: '15-04-2020',
        enabled: true,
        relation: null
    },
    {
        id: 15,
        displayName: 'Object Joel',
        date: '09-12-2020',
        enabled: true,
        relation: null
    },
    {
        id: 16,
        displayName: 'Object Tim',
        date: '12-01-2020',
        enabled: true,
        relation: {
            relationId: 15
        }
    },
    {
        id: 17,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    },
    {
        id: 18,
        displayName: 'Object Jessica',
        date: '19-07-2021',
        enabled: true,
        relation: {
            relationId: 12
        }
    },
    {
        id: 19,
        displayName: 'Object Monica',
        date: '08-02-2021',
        enabled: true,
        relation: {
            relationId: 14
        }
    },
    {
        id: 20,
        displayName: 'Object Tony',
        date: '05-09-2020',
        enabled: true,
        relation: {
            relationId: 7
        }
    }
];

const fields = [
    {
        id: 30,
        fieldName: 'Date',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 31,
        fieldName: 'Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 32,
        fieldName: 'Time',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 2
        }
    },
    {
        id: 33,
        fieldName: 'Rating',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 34,
        fieldName: 'Custom Name',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 35,
        fieldName: 'Email',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 19
        }
    },
    {
        id: 36,
        fieldName: 'Decimal',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: null
    },
    {
        id: 37,
        fieldName: 'Float',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 15
        }
    },
    {
        id: 38,
        fieldName: 'Radio',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 39,
        fieldName: 'Custom Rating',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 1
        }
    },
    {
        id: 40,
        fieldName: 'Relation',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 7
        }
    },
    {
        id: 41,
        fieldName: 'Checkbox',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 42,
        fieldName: 'Checkboxes',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 9
        }
    },
    {
        id: 43,
        fieldName: 'Dropdown',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 44,
        fieldName: 'Dynamic Tags',
        permissions: {
            view: true,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 17
        }
    },
    {
        id: 45,
        fieldName: 'Files',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 4
        }
    },
    {
        id: 46,
        fieldName: 'Long Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 20
        }
    },
    {
        id: 47,
        fieldName: 'Phone number',
        permissions: {
            view: true,
            edit: true,
            remove: false
        },
        objectRelation: null
    },
    {
        id: 48,
        fieldName: 'Price',
        permissions: {
            view: false,
            edit: false,
            remove: false
        },
        objectRelation: {
            objectId: 8
        }
    },
    {
        id: 49,
        fieldName: 'Status',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 12
        }
    },
    {
        id: 50,
        fieldName: 'Text',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 18
        }
    },
    {
        id: 51,
        fieldName: 'Yes/No',
        permissions: {
            view: true,
            edit: true,
            remove: true
        },
        objectRelation: {
            objectId: 15
        }
    }
];
// 1. Необходимо сформироать массив который будет
// содержать только те поля которые имеют permissions.view:
// true

let object = fields.filter((item) => item.permissions.view);
console.log(object);

// 2. Необходимо сформировать массив который будет
// содержать только те поля которые имеют все ключи
// // пермиссий false
let object = fields.filter((item) => {
    if(item.permissions.edit === false )
        if (item.permissions.view === false)
            if(item.permissions.remove === false )
                return item
});
console.log(object);

//
// 3. Необходимо сформировать массив полей и заменить
// полям которые имеют objectRelation.objectId c айдишника
// о б ъ е к т а н а п о л н ы й о б ъ е к т д а н н ы х о б о б ъ е к т е.
//     Взаимодействуем со вторым массивом

const result = fields.reduce((acc, item) => {
    if (item.objectRelation != null) {
        let searched = fields.find(inner => inner.id = item.objectRelation.objectId)

        return [...acc,
            {
                ...item,
               objectRelation: {
                   objectId: searched
                }
            }]
    }
    return acc
}, [])
console.log(result)
// //
// 4 . Н е о б х о д и м о с ф о р м и р о в а т ь м а с с и в п о л е й с
// проставленными пермиссиями в зависимости от того, что:
// - если у поля нет objectRelation, то пермиссии поля
// оставляем без изменений
// • если у поля есть objectRelation, то ставим все пермисии
// true, если объект objectRelation имеет enabled: true. Если
// // же enabled: false, то ставим все пермиссии false
const result = fields.map((item) => {
    if (item.objectRelation !== null) {
        let searched = objects.find((inner) => inner.id === item.objectRelation.objectId);
            return {
                ...item,
                permissions: {
                    view: searched.enabled,
                    edit: searched.enabled,
                    remove: searched.enabled,
                },
            }

    } else {
        return {
            ...item
        }
    }
});

console.log(result);
// 5. Необходимо сформировать массив объектов только тех у
// // которых есть поля
let obj = objects.filter((object) => {
    return fields.find(
        field => field.objectRelation !== null && field.objectRelation.objectId === object.id
    ) !== undefined
});
console.log(obj);

// 6. Необходимо сформировать объект такого формата
// {
//     [id объекта у которого есть поля]: [
//     {
//         [id поля]: {
//     объект пермиссий поля
// }
// },
// ...
// ],
// …
// }

const result = fields.reduce((acc, item) => {
    if (item.objectRelation != null) {
        if (item.objectRelation.objectId in acc) {
            return {
                ...acc,
                [item.objectRelation.objectId]: [...acc[item.objectRelation.objectId], {
                    [item.id]: item.permissions
                }]
            };
        }
        return {...acc, [item.objectRelation.objectId]: [{[item.id]: item.permissions}] };
    }
    return acc;
}, {});
console.log(result);

//7. Необходимо сформировать массив полей в котором будет
// изменен ключ edit на true, в том случае когда у нас view тоже
// true
const result = fields.map((item) => {

    if (item.permissions.view === true) {

        return {
            ...item,
            permissions: {
                ...item.permissions,
                edit: true,
            }
        }
    } else {
        return item
    }

}, []);

console.log(result)



// 8. Необходимо сформировать массив полей который будет
// содержать только те поля у которых есть objectRelation и
// // проставить всем этим полям дополнительный ключ relations:
//     true
const result = fields.reduce((acc, item) => {

    if (item.objectRelation != null) {
        return [...acc, { ...item, relations:true }]
    }

    return acc;
},[]);

console.log(result)

// 9. Необходимо получить массив полей отсортированных по
// fieldName
//
function SortArray(x, y){
    if (x.fieldName < y.fieldName) {return -1;}
    if (x.fieldName> y.fieldName) {return 1;}
    return 0;
}
let s = fields.sort(SortArray);
console.log(s);
// ;
// 10. Необходимо получить ответ на понимание того есть ли у
// нас хоть одно поле у которого все пермиссии true
let hasPermissions = fields.some((item) => item.permissions.view && item.permissions.remove && item.permissions.edit);
console.log(hasPermissions)
