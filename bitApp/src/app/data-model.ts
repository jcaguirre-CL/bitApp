export interface Evento {
  highlighted?: boolean;
  hovered?: boolean;
}

export class Evento {
    eventoId = '';
    informeId = '';
    respevento = '';
    fecha = '';
    hora = '';
    informante = '';
    area = '';
    programa = '';
    nivel = '';
    plataforma = {nombre: '', itemfalla: ''};
    tipofalla = '';
    descripcion = '';
    solucion = '';
    respoperacion = '';
    estado = '';
    fechares = '';
    atencion = '';
    impacto = '';
}

export class Plataforma {
    nombre = '';
    falla = '';
}

export class InformeLarge {
    // listadoEventos: Array<{_id: string}>;
    // listadoEventos: Array<String>[];
    listadoEventos: Evento[];
    respevento = '';
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
    respevento: string,
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
    respevento: 'Pedro',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
},
{
    informeId: 'S',
    respevento: 'Juan',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
},
{
    informeId: 'D',
    respevento: 'Diego',
    fecha: '10/10/2018',
    turno: 'AM',
    listadoEventos: [{_id: '5b3f7eec02702019adf539e6'}, {_id: '5b3f7eec02702019adf539e7'}],
}
];

// export const informesLarge: InformeLarge[] = [
//     {
//         informeId: 'A',
//         responsable: 'Pedro',
//         fecha: '10/10/2018',
//         turno: 'AM',
//         listadoEventos: [{
//             informeId: 'A',
//             eventoId: 'A',
//             responsableEvento: '',
//             area: '',
//             falla: '',
//             programa: '',
//             plataforma: {nombre: '', falla: ''},
//             mamfalla: '',
//             pamfalla: '',
//             fecha: '',
//             hora: '',
//             descripcion: '',
//             solucion: '',
//             estado: '',
//             responsabilidad: '',
//             informante: ''
//         }],
//     },
//     {
//         informeId: 'S',
//         responsable: 'Pedro',
//         fecha: '10/10/2018',
//         turno: 'AM',
//         listadoEventos: [{
//             informeId: 'S',
//             eventoId: 'S',
//             responsableEvento: '',
//             area: '',
//             falla: '',
//             programa: '',
//             plataforma: {nombre: '', falla: ''},
//             mamfalla: '',
//             pamfalla: '',
//             fecha: '',
//             hora: '',
//             descripcion: '',
//             solucion: '',
//             estado: '',
//             responsabilidad: '',
//             informante: ''
//         }]
//     }
// ];

export const responsables: Responsable[] = [
    {
        responsableId: '011',
        nombre: 'Jaime Tello',
        correo: 'jtello@13.cl',
        cargo: 'Jefe Soporte'
    },
    {
        responsableId: '012',
        nombre: 'Hugo Meza',
        correo: 'hmeza@13.cl',
        cargo: 'Supervisor de Plataforma'
    },
    {
        responsableId: '013',
        nombre: 'Miguel Alvear',
        correo: 'malvear@13.cl',
        cargo: 'Supervisor de Plataforma'
    },
    {
        responsableId: '014',
        nombre: 'Juan Carlos Aguirre',
        correo: 'jcaguirre@13.cl',
        cargo: 'Supervisor de Plataforma'
    },
    {
        responsableId: '111',
        nombre: 'Gerardo Pizarro',
        correo: 'gerardo.pizarro@13.cl',
        cargo: 'Ingeniero Soporte'
    },
    {
        responsableId: '112',
        nombre: 'Cristian Salinas',
        correo: 'csalinas@13.cl',
        cargo: 'Ingeniero Soporte'
    },
    {
        responsableId: '113',
        nombre: 'Marcelo Mendez',
        correo: 'mmendezp@13.cl',
        cargo: 'Ingeniero Soporte'
    },
    {
        responsableId: '114',
        nombre: 'Josué Yáñez',
        correo: 'josue.yanez@13.cl',
        cargo: 'Ingeniero Soporte'
    },
  ];

export const turnos = [
    {value: 'AM', viewValue: 'AM'},
    {value: 'PM', viewValue: 'PM'},
  ];

export const areas = ['Sist. Emisión', 'PGM en Vivo', 'Contenido de Emisión', 'Plataformas de Contenido', 'Proceso Productivo'];
export const programas = ['13HD', 'Medios Digitales', 'REC', '13C', 'Prensa', 'Nuevos Negocios', 'MKT', 'Radios'];
export const niveles = ['Información', 'Menor', 'Moderada', 'Grave', 'Crítica'];
export const tipofallas = ['Humana', 'Aplicación', 'Hardware', 'Energía', 'Insumo'];
export const estados = ['Resuelto', 'Pendiente', 'Activo'];
export const atenciones = ['Canal13', 'Secuoya'];

export const mamfallas = [
    {nombre: 'MAM', itemfalla: 'Tx Cinta'},
    {nombre: 'MAM', itemfalla: 'Tx Integración'},
    {nombre: 'MAM', itemfalla: 'Librería'},
    {nombre: 'MAM', itemfalla: 'Storage'},
    {nombre: 'MAM', itemfalla: 'Discos'},
    {nombre: 'MAM', itemfalla: 'Servidor'}
  ];
  export const pamfallas = [
    {nombre: 'PAM', itemfalla: 'Interplay'},
    {nombre: 'PAM', itemfalla: 'Storage'},
    {nombre: 'PAM', itemfalla: 'Discos'},
    {nombre: 'PAM', itemfalla: 'Workspaces'},
    {nombre: 'PAM', itemfalla: 'Command Server'}
  ];
  export const edicionfallas = [
    {nombre: 'EDICION', itemfalla: 'Aplicación'},
    {nombre: 'EDICION', itemfalla: 'Superficie Control'},
    {nombre: 'EDICION', itemfalla: 'WorkStation'},
    {nombre: 'EDICION', itemfalla: 'MediaIndexer'},
    {nombre: 'EDICION', itemfalla: 'Mojo'},
    {nombre: 'EDICION', itemfalla: 'Conversor'},
    {nombre: 'EDICION', itemfalla: 'Periféricos'},
  ];
  export const postaudiofallas = [
    {nombre: 'POST-AUDIO', itemfalla: 'Aplicación'},
    {nombre: 'POST-AUDIO', itemfalla: 'WorkStation'},
    {nombre: 'POST-AUDIO', itemfalla: 'Superficie Control'},
  ];
  export const conectividadfallas = [
    {nombre: 'CONECTIVIDAD', itemfalla: 'ISP Internet'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'Firewall'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'Balanceador'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'Switch'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'Cableado'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'ISP Regiones'},
    {nombre: 'CONECTIVIDAD', itemfalla: 'Wifi'}
  ];
  export const  datacenterfallas = [
    {nombre: 'DATACENTER', itemfalla: 'Clima'},
    {nombre: 'DATACENTER', itemfalla: 'Servicios GG'},
    {nombre: 'DATACENTER', itemfalla: 'Acceso'},
    {nombre: 'DATACENTER', itemfalla: 'Rack'},
    {nombre: 'DATACENTER', itemfalla: 'PDU'}
  ];
  export const operacionfallas = [
    {nombre: 'OPERACION', itemfalla: 'Play Out'},
    {nombre: 'OPERACION', itemfalla: 'Skype'},
  ];
  export const  graficafallas = [
    {nombre: 'GRAFICA', itemfalla: 'Engine'},
    {nombre: 'GRAFICA', itemfalla: 'Hub'},
    {nombre: 'GRAFICA', itemfalla: 'Aplicación'},
    {nombre: 'GRAFICA', itemfalla: 'Branding'}
  ];
  export const  transcodificacionfallas = [
    {nombre: 'TRANSCODIFICACION', itemfalla: 'Transcode'},
  ];
  export const  codificacionfallas = [
    {nombre: 'CODIFICACION', itemfalla: 'Encoder vivo'},
    {nombre: 'CODIFICACION', itemfalla: 'Dispositivo 4G'},
    {nombre: 'CODIFICACION', itemfalla: 'Encoder transporte'}
  ];
  export const estudios13fallas = [
    {nombre: '13ESTUDIOS', itemfalla: 'PC'},
    {nombre: '13ESTUDIOS', itemfalla: 'Capturadora'},
    {nombre: '13ESTUDIOS', itemfalla: 'Storage'},
    {nombre: '13ESTUDIOS', itemfalla: 'Discos'}
  ];
  export const ingestafallas = [
    {nombre: 'INGESTA', itemfalla: 'AirSpeed'},
    {nombre: 'INGESTA', itemfalla: 'Capture'},
    {nombre: 'INGESTA', itemfalla: 'Transcode'},
    {nombre: 'INGESTA', itemfalla: 'Tarjetas'},
    {nombre: 'INGESTA', itemfalla: 'NAS'}
  ];
  export const  emisionautofallas = [
    {nombre: 'EMISION AUTOMATIZADA', itemfalla: 'Aplicación'},
    {nombre: 'EMISION AUTOMATIZADA', itemfalla: 'Play out'},
    {nombre: 'EMISION AUTOMATIZADA', itemfalla: 'Storage'},
    {nombre: 'EMISION AUTOMATIZADA', itemfalla: 'Discos'}
  ];
  export const  inewsfallas = [
    {nombre: 'INEWS', itemfalla: 'Base de Datos'},
    {nombre: 'INEWS', itemfalla: 'Servidor'},
    {nombre: 'INEWS', itemfalla: 'Cuentas de Usuario'},
    {nombre: 'INEWS', itemfalla: 'Plugins'}
  ];
  export const transmisionfallas = [
    {nombre: 'TRANSMISION', itemfalla: 'Transmisor'},
    {nombre: 'TRANSMISION', itemfalla: 'Mux'},
    {nombre: 'TRANSMISION', itemfalla: 'IRD'}
  ];
  export const recepcioncontefallas = [
    {nombre: 'RECEPCION DE CONTENIDOS', itemfalla: 'Aspera'},
    {nombre: 'RECEPCION DE CONTENIDOS', itemfalla: 'FTP'},
    {nombre: 'RECEPCION DE CONTENIDOS', itemfalla: 'A+V'},
    {nombre: 'RECEPCION DE CONTENIDOS', itemfalla: 'Varios'}
  ];
  export const libreriamusicalfallas = [
    {nombre: 'LIBRERIAS MUSICALES', itemfalla: 'SoundMachine'},
    {nombre: 'LIBRERIAS MUSICALES', itemfalla: 'Sonoton'},
    {nombre: 'LIBRERIAS MUSICALES', itemfalla: 'Jinglepunks'}
  ];
  export const electricidadfallas = [
    {nombre: 'ELECTRICIDAD', itemfalla: 'Red'},
    {nombre: 'ELECTRICIDAD', itemfalla: 'Generadores'},
    {nombre: 'ELECTRICIDAD', itemfalla: 'UPS'},
    {nombre: 'ELECTRICIDAD', itemfalla: 'Protección'}
  ];
  export const otrasfallas = [
    {nombre: 'OTRAS', itemfalla: 'Describir'}
  ];
// export const MAMfallas = ['Tx Cinta', 'Tx nlexfer', 'Libreria', 'Storage', 'Servidor'];
// export const PAMfallas = ['Interplay', 'Storage', 'Disco', 'Workspaces', 'Command server'];

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
