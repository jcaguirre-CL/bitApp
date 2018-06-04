export class Evento {
    eventoId = 0;
    informeId = 0;
    responsableEvento = '';
    area = '';
    fecha = '';
    hora = '';
    descripcion = '';
    solucion = '';
    estado = '';
    informante = '';
}

export class Informe {
    listadoEventos: Evento[];
    responsable = '';
    fecha = '';
    turno = '';
    informeId = 0;
}

export interface Responsable {
    responsableId: string;
    nombre: string;
    correo: string;
    cargo: string;
}

export class Hero {
    id = 0;
    name = '';
    addresses: Address[];
}

export class Address {
street = '';
city   = '';
state  = '';
zip    = '';
}

export const informes: Informe[] = [
{
    informeId: 1,
    responsable: 'pedro',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 1, eventoId: 1,  responsableEvento: 'Responsable evento 1', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 1', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 1, eventoId: 2,  responsableEvento: 'Responsable evento 2', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 2', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 1, eventoId: 3,  responsableEvento: 'Responsable evento 3', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 3', estado: 'Activo'}
    ]
},
{
    informeId: 2,
    responsable: 'juan',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 2, eventoId: 4,  responsableEvento: 'Responsable evento 4', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 4', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 2, eventoId: 5,  responsableEvento: 'Responsable evento 5', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 5', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 2, eventoId: 6,  responsableEvento: 'Responsable evento 6', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 6', estado: 'Activo'}
    ]
},
{
    informeId: 3,
    responsable: 'diego',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 3, eventoId: 7,  responsableEvento: 'Responsable evento 7', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 7', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 3, eventoId: 8,  responsableEvento: 'Responsable evento 8', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 8', estado: 'Activo'},
    // tslint:disable-next-line:max-line-length
    {solucion: null, informante: null, informeId: 3, eventoId: 9,  responsableEvento: 'Responsable evento 9', area: 'AREA 1', hora: null, fecha: null, descripcion: 'Descripcion evento 9', estado: 'Activo'}
    ]
}
];

export const areas = ['AREA 1', 'AREA 2', 'AREA 3', 'AREA 4'];
export const estados = ['Resuelto', 'Pendiente', 'Activo'];
