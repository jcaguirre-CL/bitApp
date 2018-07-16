export class Evento {
    informeId = '';
    eventoId = '';
    responsableEvento = '';
    area = '';
    programa = '';
    falla = '';
    plataforma = {nombre: '', falla: ''};
    mamfalla = '';
    pamfalla = '';
    fecha = '';
    hora = '';
    descripcion = '';
    solucion = '';
    estado = '';
    informante = '';
    responsabilidad = '';
}

export class Plataforma {
    nombre = '';
    falla = '';
}

export class InformeLarge {
    // listadoEventos: Array<{_id: string}>;
    // listadoEventos: Array<String>[];
    listadoEventos: Evento[];
    responsable = '';
    fecha = '';
    turno = '';
    informeId = '';
}

// export class InformeShort {
//     listadoEventos: Array<{_id: string}>;
//     // listadoEventos: Array<String>[];
//     // listadoEventos: Evento[];
//     responsable = '';
//     fecha = '';
//     turno = '';
//     informeId = 0;
// }
export class ListadoEventos {
    _id = '';
}

export class ModificarEventoInformeId {
    constructor (
    eventoId: String,
    informeId: String
    ) {}
}

export class InformeShort {
    constructor(
    // listadoEventos: Array<{_id: string}> = ListadoEventos,
    listadoEventos: Array<ListadoEventos>,
    responsable: string,
    fecha: string,
    turno: string,
    informeId: string
    ) {}
}

export class Responsable {
    constructor(
        public responsableId: string,
        public nombre: string,
        public correo: string,
        public cargo: string,
    ) {}
}

export const informesShort: InformeShort[] = [
{
    informeId: 'A',
    responsable: 'Pedro',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
},
{
    informeId: 'S',
    responsable: 'Juan',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
},
{
    informeId: 'D',
    responsable: 'Diego',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
}
];

export const informesLarge: InformeLarge[] = [
    {
        informeId: 'A',
        responsable: 'Pedro',
        fecha: '10/10/2018',
        turno: 'AM',
        listadoEventos: [{
            informeId: 'A',
            eventoId: 'A',
            responsableEvento: '',
            area: '',
            falla: '',
            programa: '',
            plataforma: {nombre: '', falla: ''},
            mamfalla: '',
            pamfalla: '',
            fecha: '',
            hora: '',
            descripcion: '',
            solucion: '',
            estado: '',
            responsabilidad: '',
            informante: ''
        }],
    },
    {
        informeId: 'S',
        responsable: 'Pedro',
        fecha: '10/10/2018',
        turno: 'AM',
        listadoEventos: [{
            informeId: 'S',
            eventoId: 'S',
            responsableEvento: '',
            area: '',
            falla: '',
            programa: '',
            plataforma: {nombre: '', falla: ''},
            mamfalla: '',
            pamfalla: '',
            fecha: '',
            hora: '',
            descripcion: '',
            solucion: '',
            estado: '',
            responsabilidad: '',
            informante: ''
        }]
    }
];

export const responsables: Responsable[] = [
    {
      responsableId: '001',
      nombre: 'Juan',
      correo: 'correo',
      cargo: 'responsable'
    },
    {
      responsableId: '002',
      nombre: 'Pedro',
      correo: 'correo',
      cargo: 'responsable'
    },
    {
      responsableId: '003',
      nombre: 'Diego',
      correo: 'correo',
      cargo: 'responsable'
    }
  ];

export const turnos = [
    {value: 'AM', viewValue: 'AM'},
    {value: 'PM', viewValue: 'PM'},
  ];

export const areas = ['Emision Aire', 'Distribucion de Contenido', 'Medios Interactivos', 'Edicion de Contenido'];
export const programas = ['Medios Digitales', 'REC', '13C', 'Prensa', 'Nuevos Negocios', 'MKT', 'Radios'];
export const estados = ['Resuelto', 'Pendiente', 'Activo'];
export const responsabilidades = ['Canal13', 'Secuoya'];
export const fallas = ['Operativa', 'Software', 'Hardware', 'Energia', 'Internet'];
export const plataformas = ['MAM', 'PAM', 'Gestor de Noticias', 'Grafica', 'Data Center'];
export const MAMfallas = ['Tx Cinta', 'Tx nlexfer', 'Libreria', 'Storage', 'Servidor'];
export const PAMfallas = ['Interplay', 'Storage', 'Disco', 'Workspaces', 'Command server'];

// export interface Responsable {
//     responsableId: string;
//     nombre: string;
//     correo: string;
//     cargo: string;
// }

// export interface ResponsableGroup {
//     letter: string;
//     names: string[];
// }

// export class Hero {
//     id = 0;
//     name = '';
//     addresses: Address[];
// }

// export class Address {
// street = '';
// city   = '';
// state  = '';
// zip    = '';
// }
