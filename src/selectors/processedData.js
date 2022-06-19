export const integrationObject = (str, arrayPatient) => {


  const [ IDMUESTR, NOMBRE, APELLIDO, MODO, FECHA, HORA, ESTDEMUESTRA, WBCL, NEUL,
    LYML, MONL, EOSL, BASL, NEU, MON, LYM, EOS, BAS, RBCL, HGBGDL, HCT, MCVFL, MCHPG, MCHCGDL,
    RDWCV, RDWSD, PLTL, MPVFL , PDW, PCTMLL, ALYL, ALY, LICL, LIC, BLASTL, BLAST, NRBCL,NRBC,
    PLTCLUMPL, PLTCLUMP, LIPL, LIP, NLR, PLR, IDPAC,SEXO,TIPOPAC,GRUPODEREF,FECHANAC, EDAD, DPTO,
    NCAMA, FECHADETRAZADO, HORADETRAZADO, FECHAENTREGA, HORENTR, MEDICOCLINICO, OPERADOR, VALIDADOPOR,
    COMENTARIOS, MENSAJEWBC, MENSAJERBC, MENSAJEPLT, GRUPOSANGUINEO, ESR, PARMMICROSCOPICOS
  ] = str
  class Person {
    constructor({
      IDmuest, NOMBRE, APELLIDO, MODO, FECHA, HORA, ESTDEMUESTRA, WBCL, NEUL,
      LYML, MONL, EOSL, BASL, NEU, MON, LYM, EOS, BAS, RBCL, HGBGDL, HCT, MCVFL, MCHPG, MCHCGDL,
      RDWCV, RDWSD, PLTL, MPVFL , PDW, PCTMLL, ALYL, ALY, LICL, LIC, BLASTL, BLAST, NRBCL,NRBC,
      PLTCLUMPL, PLTCLUMP, LIPL, LIP, NLR, PLR, IDPAC,SEXO,TIPOPAC,GRUPODEREF,FECHANAC, EDAD, DPTO,
      NCAMA, FECHADETRAZADO, HORADETRAZADO, FECHAENTREGA, HORENTR, MEDICOCLINICO, OPERADOR, VALIDADOPOR,
      COMENTARIOS, MENSAJEWBC, MENSAJERBC, MENSAJEPLT, GRUPOSANGUINEO, ESR, PARMMICROSCOPICOS
    }){
      this.IDmuest = IDmuest
      this.NOMBRE = NOMBRE
      this.APELLIDO = APELLIDO
      this.MODO = MODO
      this.FECHA = FECHA
      this.HORA = HORA
      this.ESTDEMUESTRA = ESTDEMUESTRA
      this.WBCL = WBCL
      this.NEUL = NEUL
      this.LYML = LYML
      this.MONL = MONL
      this.EOSL = EOSL
      this.BASL = BASL
      this.NEU = NEU
      this.MON = MON
      this.LYM = LYM
      this.EOS = EOS
      this.BAS = BAS
      this.RBCL = RBCL
      this.HGBGDL = HGBGDL
      this.HCT = HCT
      this.MCVFL = MCVFL
      this.MCHPG = MCHPG
      this.MCHCGDL = MCHCGDL
      this.RDWCV = RDWCV
      this.RDWSD = RDWSD
      this.PLTL = PLTL
      this.MPVFL = MPVFL
      this.PDW = PDW
      this.PCTMLL = PCTMLL
      this.ALYL = ALYL
      this.ALY = ALY
      this.LICL = LICL
      this.LIC = LIC
      this.BLASTL = BLASTL
      this.BLAST = BLAST
      this.NRBCL = NRBCL
      this.NRBC = NRBC
      this.PLTCLUMPL = PLTCLUMPL
      this.PLTCLUMP = PLTCLUMP
      this.LIPL = LIPL
      this.LIP = LIP
      this.NLR = NLR
      this.PLR = PLR
      this.IDPAC = IDPAC
      this.SEXO = SEXO
      this.TIPOPAC = TIPOPAC
      this.GRUPODEREF = GRUPODEREF
      this.FECHANAC = FECHANAC
      this.EDAD = EDAD
      this.DPTO = DPTO
      this.NCAMA = NCAMA
      this.FECHADETRAZADO = FECHADETRAZADO
      this.HORADETRAZADO = HORADETRAZADO
      this.FECHAENTREGA = FECHAENTREGA
      this.HORENTR = HORENTR
      this.MEDICOCLINICO = MEDICOCLINICO
      this.OPERADOR = OPERADOR
      this.VALIDADOPOR = VALIDADOPOR
      this.COMENTARIOS = COMENTARIOS
      this.MENSAJEWBC = MENSAJEWBC
      this.MENSAJEPLT = MENSAJEPLT
      this.GRUPOSANGUINEO = GRUPOSANGUINEO
      this.ESR = ESR
      this.PARMMICROSCOPICOS = PARMMICROSCOPICOS
    }
  }
  const resultShows = arrayPatient.map((ele, i)=> {
    const person = new Person({
      IDmuest: ele[0],
      NOMBRE: ele[1],
      APELLIDO: ele[2],
      MODO: ele[3],
      FECHA: ele[4],
      HORA: ele[5],
      ESTDEMUESTRA: ele[6],
      WBCL: ele[7],
      NEUL: ele[8],
      LYML: ele[9],
      MONL: ele[10],
      EOSL: ele[11],
      BASL: ele[12],
      NEU: ele[13],
      MON: ele[14],
      LYM: ele[15],
      EOS: ele[16],
      BAS: ele[17],
      RBCL: ele[18],
      HGBGDL: ele[19],
      HCT: ele[20],
      MCVFL: ele[21],
      MCHPG: ele[22],
      MCHCGDL: ele[23],
      RDWCV: ele[24],
      RDWSD: ele[25],
      PLTL: ele[26],
      MPVFL: ele[27],
      PDW: ele[28],
      PCTMLL: ele[29],
      ALYL: ele[30],
      ALY: ele[31],
      LICL: ele[32],
      LIC: ele[33],
      BLASTL: ele[34],
      BLAST: ele[35],
      NRBCL: ele[36],
      NRBC: ele[37],
      PLTCLUMPL: ele[38],
      PLTCLUMP: ele[39],
      LIPL: ele[40],
      LIP: ele[41],
      NLR: ele[42],
      PLR: ele[43],
      IDPAC: ele[44],
      SEXO: ele[45],
      TIPOPAC: ele[46],
      GRUPODEREF: ele[47],
      FECHANAC: ele[48],
      EDAD: ele[49],
      DPTO: ele[50],
      NCAMA: ele[51],
      FECHADETRAZADO: ele[52],
      HORADETRAZADO: ele[53],
      FECHAENTREGA: ele[54],
      HORENTR: ele[55],
      MEDICOCLINICO: ele[56],
      OPERADOR: ele[57],
      VALIDADOPOR: ele[58],
      COMENTARIOS: ele[59],
      MENSAJEWBC: ele[60],
      MENSAJEPLT: ele[61],
      GRUPOSANGUINEO: ele[62],
      ESR: ele[63],
      PARMMICROSCOPICOS: ele[64],
    })
    return person
  })
}
