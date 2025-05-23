(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jsbrasil = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_1 = require("./estados");
var utils_1 = require("./utils");
/**
 *
 * @param uf - UF do número da guia. Ex: 35(SP), 81(PE)
 * @param ano - ANO do número da guia. Ex: 2018, 2019
 * @param tipo - TIPO da guia. Aih = 1, APAC = 2
 */
function create_aih(value) {
    value = utils_1.getAllDigits(value.toString());
    if (value.length > 12) {
        value = value.toString().substr(0, value.length - 1);
    }
    var cod = parseInt(value);
    var calc = Math.ceil(cod - (cod / 11));
    var digito = calc.toString().substr(-1);
    return digito;
}
exports.create_aih = create_aih;
function create_certidao(value) {
    if (value.length > 30) {
        value = value.substring(0, value.length - 2);
    }
    var b1 = parseInt(value.slice(29));
    var b2 = parseInt(value.slice(28, 29));
    var b3 = parseInt(value.slice(27, 28));
    var b4 = parseInt(value.slice(26, 27));
    var b5 = parseInt(value.slice(25, 26));
    var b6 = parseInt(value.slice(24, 25));
    var b7 = parseInt(value.slice(23, 24));
    var b8 = parseInt(value.slice(22, 23));
    var b9 = parseInt(value.slice(21, 22));
    var b10 = parseInt(value.slice(20, 21));
    var b11 = parseInt(value.slice(19, 20));
    var b12 = parseInt(value.slice(18, 19));
    var b13 = parseInt(value.slice(17, 18));
    var b14 = parseInt(value.slice(16, 17));
    var b15 = parseInt(value.slice(15, 16));
    var b16 = parseInt(value.slice(14, 15));
    var b17 = parseInt(value.slice(13, 14));
    var b18 = parseInt(value.slice(12, 13));
    var b19 = parseInt(value.slice(11, 12));
    var b20 = parseInt(value.slice(10, 11));
    var b21 = parseInt(value.slice(9, 10));
    var b22 = parseInt(value.slice(8, 9));
    var b23 = parseInt(value.slice(7, 8));
    var b24 = parseInt(value.slice(6, 7));
    var b25 = parseInt(value.slice(5, 6));
    var b26 = parseInt(value.slice(4, 5));
    var b27 = parseInt(value.slice(3, 4));
    var b28 = parseInt(value.slice(2, 3));
    var b29 = parseInt(value.slice(1, 2));
    var b30 = parseInt(value.slice(0, 1));
    var certPriDig = (b1 * 9 + b2 * 8 + b3 * 7 + b4 * 6 + b5 * 5 + b6 * 4 + b7 * 3 + b8 * 2 + b9 * 1 + b10 * 0 + b11 * 10 + b12 * 9 + b13 * 8 + b14 * 7 + b15 * 6 + b16 * 5 + b17 * 4 + b18 * 3 + b19 * 2 + b20 * 1 + b21 * 0 + b22 * 10 + b23 * 9 + b24 * 8 + b25 * 7 + b26 * 6 + b27 * 5 + b28 * 4 + b29 * 3 + b30 * 2) % 11;
    if (certPriDig == 10) {
        certPriDig = 1;
    }
    var certSegDig = (certPriDig * 9 + b1 * 8 + b2 * 7 + b3 * 6 + b4 * 5 + b5 * 4 + b6 * 3 + b7 * 2 + b8 * 1 + b9 * 0 + b10 * 10 + b11 * 9 + b12 * 8 + b13 * 7 + b14 * 6 + b15 * 5 + b16 * 4 + b17 * 3 + b18 * 2 + b19 * 1 + b20 * 0 + b21 * 10 + b22 * 9 + b23 * 8 + b24 * 7 + b25 * 6 + b26 * 5 + b27 * 4 + b28 * 3 + b29 * 2 + b30 * 1) % 11;
    if (certSegDig == 10) {
        certSegDig = 1;
    }
    var certDV = certPriDig * 10 + certSegDig;
    if (certDV == 0) {
        certDV = "00";
    }
    if (certDV > 0 && certDV < 10) {
        certDV = "0" + certDV;
    }
    return certDV.toString();
}
exports.create_certidao = create_certidao;
function create_cnhespelho(value) {
    var v1 = utils_1.modulo11Custom(value.substr(0, value.length - 1), 1, 8, false);
    return v1;
}
exports.create_cnhespelho = create_cnhespelho;
function create_renachestadual(value) {
    var state = value.substr(0, 2).toLowerCase();
    if (!estados_1.ESTADOS_SIGLA.includes(state)) {
        return false;
    }
    var digits = value.substr(2);
    digits = digits.replace(/[^\d]/g, '');
    if (digits.length !== 9) {
        return false;
    }
    var v1 = utils_1.modulo11Custom(digits.substr(0, digits.length - 1), 1, 11);
    return '' + v1;
}
exports.create_renachestadual = create_renachestadual;
/**
 *
 * @param value
 * @returns
 */
function create_renachseguranca(value) {
    value = value.replace(/[^\d]+/g, '');
    if (value.length !== 11) {
        return false;
    }
    var v1 = utils_1.modulo11Custom(value.substr(0, value.length - 1), 1, 11);
    return "" + v1;
}
exports.create_renachseguranca = create_renachseguranca;
/**
 * Dígito verificador da CNH não é mais o módulo 11 conforme últimas resoluções
 * @param value
 * @returns
 */
function create_cnh(value) {
    value = value.replace(/[^\d]+/g, '');
    if (value.length != 11 || value === '0') {
        return false;
    }
    // let v1 = modulo11Custom(value.substr(0, value.length - 2), 2);
    // if (v1 === '10') v1 = '00'
    var v1 = value.substr(-2);
    return v1;
}
exports.create_cnh = create_cnh;
function create_cnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj === '') {
        return false;
    }
    if (cnpj.length !== 14) {
        return false;
    }
    // Elimina CNPJs invalidos conhecidos
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return false;
    }
    // Valida DVs
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var resultados = [0, 0];
    resultados[0] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (var i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    resultados[1] = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultados;
}
exports.create_cnpj = create_cnpj;
function create_cns(number) {
    number = utils_1.getAllDigits(number);
    var somaInicial = 0;
    for (var i = 0; i < number.length - 1; i++) {
        somaInicial += parseInt(number[i]) * (15 - i);
    }
    var soma = somaInicial;
    var rest = 0;
    while (soma % 11 !== 0) {
        rest++;
        soma = somaInicial + (rest * 1);
    }
    return number.substr(-2, 1) + rest;
}
exports.create_cns = create_cns;
function create_cpf(strCPF) {
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF === '00000000000') {
        return false;
    }
    // const r1 = modulo11(strCPF.substr(0, strCPF.length - 2))
    // const r2 = modulo11(strCPF.substr(0, strCPF.length - 2) + '' + r1)
    // const restos = [
    //   r1, r2
    // ];
    var restoscustom = utils_1.modulo11Custom(strCPF.substr(0, strCPF.length - 2), 2, 12);
    return restoscustom;
}
exports.create_cpf = create_cpf;
function create_cartaocredito(number) {
    // if (number.length > 18) { alert("Erro. A rotina não abrange cartões\ncom mais de 18 dígitos (fora o DV).\nIntroduza 18 dígitos, no máximo."); }
    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);
    var b1 = parseInt(number.slice(17));
    var b2 = parseInt(number.slice(16, 17));
    var b3 = parseInt(number.slice(15, 16));
    var b4 = parseInt(number.slice(14, 15));
    var b5 = parseInt(number.slice(13, 14));
    var b6 = parseInt(number.slice(12, 13));
    var b7 = parseInt(number.slice(11, 12));
    var b8 = parseInt(number.slice(10, 11));
    var b9 = parseInt(number.slice(9, 10));
    var b10 = parseInt(number.slice(8, 9));
    var b11 = parseInt(number.slice(7, 8));
    var b12 = parseInt(number.slice(6, 7));
    var b13 = parseInt(number.slice(5, 6));
    var b14 = parseInt(number.slice(4, 5));
    var b15 = parseInt(number.slice(3, 4));
    var b16 = parseInt(number.slice(2, 3));
    var b17 = parseInt(number.slice(1, 2));
    var b18 = parseInt(number.slice(0, 1));
    var ci17 = b1 * 2;
    if (ci17 > 9) {
        ci17 = ci17 - 9;
    }
    var ci1516 = b3 * 2;
    if (ci1516 > 9) {
        ci1516 = ci1516 - 9;
    }
    var ci1314 = b5 * 2;
    if (ci1314 > 9) {
        ci1314 = ci1314 - 9;
    }
    var ci1112 = b7 * 2;
    if (ci1112 > 9) {
        ci1112 = ci1112 - 9;
    }
    var ci910 = b9 * 2;
    if (ci910 > 9) {
        ci910 = ci910 - 9;
    }
    var ci78 = b11 * 2;
    if (ci78 > 9) {
        ci78 = ci78 - 9;
    }
    var ci56 = b13 * 2;
    if (ci56 > 9) {
        ci56 = ci56 - 9;
    }
    var ci34 = b15 * 2;
    if (ci34 > 9) {
        ci34 = ci34 - 9;
    }
    var ci12 = b17 * 2;
    if (ci12 > 9) {
        ci12 = ci12 - 9;
    }
    var ci1617 = b2;
    var ci1415 = b4;
    var ci1213 = b6;
    var ci1011 = b8;
    var ci89 = b10;
    var ci67 = b12;
    var ci45 = b14;
    var ci23 = b16;
    var ci01 = b18;
    var ccredDig = (ci1617 + ci1415 + ci1213 + ci1011 + ci89 + ci67 + ci45 + ci23 + ci01 + ci17 + ci1516 + ci1314 + ci1112 + ci910 + ci78 + ci56 + ci34 + ci12) % 10;
    ccredDig = 10 - ccredDig;
    if (ccredDig == 10) {
        ccredDig = 0;
    }
    return ccredDig;
}
exports.create_cartaocredito = create_cartaocredito;
function create_ect(number) {
    number = utils_1.getAllDigits(number);
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var regEctDig = (b1 * 7 + b2 * 9 + b3 * 5 + b4 * 3 + b5 * 2 + b6 * 4 + b7 * 6 + b8 * 8) % 11;
    regEctDig = 11 - regEctDig;
    if (regEctDig == 11) {
        regEctDig = 5;
    }
    if (regEctDig == 10) {
        regEctDig = 0;
    }
    return regEctDig;
}
exports.create_ect = create_ect;
function create_pispasep(number) {
    number = utils_1.getAllDigits(number);
    var nis = utils_1.fillString(number, 11, '0');
    var d;
    var p = 2, c = 9;
    for (d = 0; c >= 0; c--, (p < 9) ? p++ : p = 2) {
        d += parseInt(nis[c]) * p;
    }
    var digit = (((10 * d) % 11) % 10);
    return digit;
}
exports.create_pispasep = create_pispasep;
function create_renavam(renavam) {
    var dig1 = 0;
    while (renavam.length < 11) {
        renavam = '0' + renavam;
    }
    dig1 = (renavam.charCodeAt(0) - 48) * 3 + (renavam.charCodeAt(1) - 48) * 2 + (renavam.charCodeAt(2) - 48) * 9 + (renavam.charCodeAt(3) - 48) * 8 +
        (renavam.charCodeAt(4) - 48) * 7 + (renavam.charCodeAt(5) - 48) * 6 + (renavam.charCodeAt(6) - 48) * 5 +
        (renavam.charCodeAt(7) - 48) * 4 + (renavam.charCodeAt(8) - 48) * 3 + (renavam.charCodeAt(9) - 48) * 2;
    dig1 = dig1 * 10;
    var resto = (dig1 % 11);
    if (resto === 10) {
        return 0;
    }
    else {
        return resto;
    }
}
exports.create_renavam = create_renavam;
/**
 *
 * Font: http://ghiorzi.org/index.htm
 * @param number
 */
function create_processo(number) {
    number = utils_1.getAllDigits(number);
    number = "00000000000000000" + number;
    number = number.slice(number.length - 18);
    var b1 = parseInt(number.slice(0, 1)) * 10000000000;
    var b2 = parseInt(number.slice(1, 2)) * 1000000000;
    var b3 = parseInt(number.slice(2, 3)) * 100000000;
    var b4 = parseInt(number.slice(3, 4)) * 10000000;
    var b5 = parseInt(number.slice(4, 5)) * 1000000;
    var b6 = parseInt(number.slice(5, 6)) * 100000;
    var b7 = parseInt(number.slice(6, 7)) * 10000;
    var b8 = parseInt(number.slice(7, 8)) * 1000;
    var b9 = parseInt(number.slice(8, 9)) * 100;
    var b10 = parseInt(number.slice(9, 10)) * 10;
    var b11 = parseInt(number.slice(10, 11));
    var proc1a11 = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10 + b11;
    var resto1 = proc1a11 % 97;
    var b12 = parseInt(number.slice(11, 12)) * 1000000;
    var b13 = parseInt(number.slice(12, 13)) * 100000;
    var b14 = parseInt(number.slice(13, 14)) * 10000;
    var b15 = parseInt(number.slice(14, 15)) * 1000;
    var b16 = parseInt(number.slice(15, 16)) * 100;
    var b17 = parseInt(number.slice(16, 17)) * 10;
    var b18 = parseInt(number.slice(17));
    var proc12a18 = b12 + b13 + b14 + b15 + b16 + b17 + b18;
    var resto2 = (resto1 * 10000000 * 100 + proc12a18 * 100) % 97;
    var procJudDV = 98 - resto2;
    if (procJudDV < 10) {
        procJudDV = "0" + procJudDV;
    }
    var procJudCompl = b1 / 10000 + b2 / 10000 + b3 / 10000 + b4 / 10000 + b5 / 10000 + b6 / 10000 + b7 / 10000 + "-" + procJudDV + "." + b8 / 1000 + b9 / 100 + b10 / 10 + b11 + "." + b12 / 1000000 + "." + b13 / 100000 + b14 / 10000 + "." + b15 / 1000 + b16 / 100 + b17 / 10 + b18;
    procJudCompl = "000000" + procJudCompl;
    var result = procJudCompl.slice(procJudCompl.length - 25);
    return result;
}
exports.create_processo = create_processo;
function create_titulo_atual(titulo) {
    var tit = titulo;
    var dig1 = 0;
    var dig2 = 0;
    var tam = tit.length;
    var estado = tit.substr(tam - 4, 2);
    titulo = tit.substr(0, tam - 2);
    titulo = '000000000000' + titulo;
    titulo = titulo.substr(titulo.length - 11, titulo.length - 1);
    var exce = (estado === '01') || (estado === '02');
    dig1 = (titulo.charCodeAt(0) - 48) * 2 + (titulo.charCodeAt(1) - 48) * 9 + (titulo.charCodeAt(2) - 48) * 8 +
        (titulo.charCodeAt(3) - 48) * 7 + (titulo.charCodeAt(4) - 48) * 6 + (titulo.charCodeAt(5) - 48) * 5 +
        (titulo.charCodeAt(6) - 48) * 4 + (titulo.charCodeAt(7) - 48) * 3 + (titulo.charCodeAt(8) - 48) * 2;
    var resto = (dig1 % 11);
    if (resto === 0) {
        if (exce) {
            dig1 = 1;
        }
        else {
            dig1 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig1 = 0;
        }
        else {
            dig1 = 11 - resto;
        }
    }
    dig2 = (titulo.charCodeAt(9) - 48) * 4 + (titulo.charCodeAt(10) - 48) * 3 + dig1 * 2;
    resto = (dig2 % 11);
    if (resto === 0) {
        if (exce) {
            dig2 = 1;
        }
        else {
            dig2 = 0;
        }
    }
    else {
        if (resto === 1) {
            dig2 = 0;
        }
        else {
            dig2 = 11 - resto;
        }
    }
    return dig1.toString() + dig2.toString();
}
exports.create_titulo_atual = create_titulo_atual;
function create_titulo(titNum) {
    titNum = utils_1.getAllDigits(titNum);
    if (titNum.length > 11) {
        titNum = titNum.substr(0, 11);
    }
    titNum = "00000000" + titNum;
    titNum = titNum.slice(titNum.length - 11);
    var a1 = parseInt(titNum.slice(10));
    var a2 = parseInt(titNum.slice(9, 10));
    var a3 = parseInt(titNum.slice(8, 9));
    var a4 = parseInt(titNum.slice(7, 8));
    var a5 = parseInt(titNum.slice(6, 7));
    var a6 = parseInt(titNum.slice(5, 6));
    var a7 = parseInt(titNum.slice(4, 5));
    var a8 = parseInt(titNum.slice(3, 4));
    var a9 = parseInt(titNum.slice(2, 3));
    var a10 = parseInt(titNum.slice(1, 2));
    var a11 = parseInt(titNum.slice(0, 1));
    if (a2 * 10 + a1 == 0 || a2 * 10 + a1 > 28) {
        throw new Error("Esse nº é suspeito, porque a identificação da \nUF (últimos 2 dígitos) deve estar entre 01 e 28.");
    }
    var titExcecao1 = 0;
    var titExcecao2 = 0;
    var titPriDig = (a3 * 9 + a4 * 8 + a5 * 7 + a6 * 6 + a7 * 5 + a8 * 4 + a9 * 3 + a10 * 2 + a11 * 9) % 11;
    if (titPriDig == 0) {
        titExcecao1 = 1;
    }
    if (titPriDig == 10) {
        titPriDig = 0;
    }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao1 == 1)) {
        titPriDig = 1;
    }
    var titSegDig = (titPriDig * 9 + a1 * 8 + a2 * 7) % 11;
    if (titSegDig == 0) {
        titExcecao2 = 1;
    }
    if (titSegDig == 10) {
        titSegDig = 0;
    }
    if ((a2 * 10 + a1 == 1 || a2 * 10 + a1 == 2) && (titExcecao2 == 1)) {
        titSegDig = 1;
    }
    var titDV = titPriDig * 10 + titSegDig;
    if (titDV == 0) {
        titDV = "00";
    }
    if (titDV > 0 && titDV < 10) {
        titDV = "0" + titDV;
    }
    return titDV.toString();
}
exports.create_titulo = create_titulo;

},{"./estados":2,"./utils":12}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESTADOS_SIGLA = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma',
    'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs',
    'sc', 'se', 'sp', 'to'
];
exports.ESTADOS = [
    { name: 'Acre', shortname: 'AC', slug: 'acre' },
    { name: 'Alagoas', shortname: 'AL', slug: 'alagoas' },
    { name: 'Amapá', shortname: 'AP', slug: 'amapa' },
    { name: 'Amazonas', shortname: 'AM', slug: 'amazonas' },
    { name: 'Bahia', shortname: 'BA', slug: 'bahia' },
    { name: 'Ceará', shortname: 'CE', slug: 'ceara' },
    { name: 'Distrito Federal', shortname: 'DF', slug: 'distrito-federal' },
    { name: 'Espírito Santo', shortname: 'ES', slug: 'espirito-santo' },
    { name: 'Goiás', shortname: 'GO', slug: 'goias' },
    { name: 'Maranhão', shortname: 'MA', slug: 'maranhao' },
    { name: 'Mato Grosso', shortname: 'MT', slug: 'mato-grosso' },
    { name: 'Mato Grosso do Sul', shortname: 'MS', slug: 'mato-grosso-do-sul' },
    { name: 'Minas Gerais', shortname: 'MG', slug: 'minas-gerais' },
    { name: 'Pará', shortname: 'PA', slug: 'para' },
    { name: 'Paraíba', shortname: 'PB', slug: 'paraiba' },
    { name: 'Paraná', shortname: 'PR', slug: 'parana' },
    { name: 'Pernambuco', shortname: 'PE', slug: 'pernambuco' },
    { name: 'Piauí', shortname: 'PI', slug: 'piaui' },
    { name: 'Rio de Janeiro', shortname: 'RJ', slug: 'rio-de-janeiro' },
    { name: 'Rio Grande do Norte', shortname: 'RN', slug: 'rio-grande-do-norte' },
    { name: 'Rio Grande do Sul', shortname: 'RS', slug: 'rio-grande-do-sul' },
    { name: 'Rondônia', shortname: 'RO', slug: 'rondonia' },
    { name: 'Roraima', shortname: 'RR', slug: 'roraima' },
    { name: 'Santa Catarina', shortname: 'SC', slug: 'santa-catarina' },
    { name: 'São Paulo', shortname: 'SP', slug: 'sao-paulo' },
    { name: 'Sergipe', shortname: 'SE', slug: 'sergipe' },
    { name: 'Tocantins', shortname: 'TO', slug: 'tocantins' }
];

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var validate_1 = require("./validate");
exports.validateBr = validate_1.validateBr;
var mask = require("./mask");
var mask_1 = require("./mask");
var placa_1 = require("./placa");
var estados_1 = require("./estados");
exports.utilsBr = {
    isPresent: utils_1.isPresent,
    isArray: utils_1.isArray,
    isString: utils_1.isString,
    isNumber: utils_1.isNumber,
    isNil: utils_1.isNil,
    processCaretTraps: utils_1.processCaretTraps,
    allNumbersAreSame: utils_1.allNumbersAreSame,
    getAllDigits: utils_1.getAllDigits,
    getAllWords: utils_1.getAllWords,
    currencyToNumber: utils_1.currencyToNumber,
    modulo11: utils_1.modulo11,
    numberToCurrency: utils_1.numberToCurrency,
    slugify: utils_1.slugify,
    fillString: utils_1.fillString,
    randArray: utils_1.randArray,
    rand: utils_1.rand,
    randomNumber: utils_1.randomNumber,
    randomLetter: utils_1.randomLetter,
    randomLetterOrNumber: utils_1.randomLetterOrNumber,
    getSpecialProperty: utils_1.getSpecialProperty,
    MASKS: mask_1.MASKS,
    MASKSIE: mask_1.MASKSIE,
    PLACAS_RANGE: placa_1.PLACAS_RANGE,
    ESTADOS: estados_1.ESTADOS
};
exports.maskBr = mask.maskBr;

},{"./estados":2,"./mask":9,"./placa":10,"./utils":12,"./validate":13}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/**
 * BASED ON https://github.com/gammasoft/ie/
 */
exports.generateInscricaoEstadual = {
    ac: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '01')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiroDigito));
        return base + primeiroDigito + segundoDigito;
    },
    am: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    al: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '24')) {
            return false;
        }
        // FORMAÇÃO: 24XNNNNND,  sendo:
        // 24 – Código do Estado
        // X – Tipo de empresa (0-Normal, 3-Produtor Rural, 5-Substituta, 7- Micro-Empresa Ambulante, 8-Micro-Empresa)
        // NNNNN – Número da empresa
        // D – Dígito de verificação calculado pelo Módulo11, pêsos 2 à 9 da direita para a esquerda, exceto D
        // Exemplo: Número 2 4 0 0 0 0 0 4 D
        //                 2 4 X N N N N N D
        // Fonte: http://www.sintegra.gov.br/Cad_Estados/cad_AL.html
        var base = primeiros(valor);
        // Pesos 9 8 7 6 5 4 3 2
        // SOMA = (2 * 4) + (3 * 0) + (4 * 0) + (5 * 0) + (6 * 0) + (7 * 0) + (8 * 4) + (9 * 2) = 58
        var soma = base.split('').reduce(function (acc, v, i) {
            return acc + (9 - i) * Number(v);
        }, 0);
        // PRODUTO = 58 * 10 = 580
        var produto = soma * 10;
        // RESTO = 580 – INTEIRO(580 / 11)*11 = 580 – (52*11) = 8
        var resto = produto - Math.floor(produto / 11) * 11;
        // DÍGITO = 8 - Caso RESTO seja igual a 10 o DÍGITO será 0 (zero)
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ap: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '03')) {
            return false;
        }
        var base = primeiros(valor);
        var p, d;
        if (entre(base, 3000001, 3017000)) {
            p = 5;
            d = 0;
        }
        else if (entre(base, 3017001, 3019022)) {
            p = 9;
            d = 1;
        }
        else {
            p = 0;
            d = 0;
        }
        var resto = mod(p + base, [2, 3, 4, 5, 6, 7, 8, 9, 1]);
        var digito;
        if (resto === 1) {
            digito = 0;
        }
        else if (resto === 0) {
            digito = d;
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ba: function (valor) {
        if (tamanhoNaoE(valor, 8) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = primeiros(valor, valor.length - 2);
        var primeiroDigito, segundoDigito;
        var segundoMultiplicador = serie(2, 7);
        var primeiroMultiplicador = serie(2, 8);
        var primeiroResto, segundoResto;
        var digitoComparacao = valor.substring(0, 1);
        if (tamanhoE(valor, 9)) {
            segundoMultiplicador.push(8);
            primeiroMultiplicador.push(9);
            digitoComparacao = valor.substring(1, 2);
        }
        if ('0123458'.split('').indexOf(digitoComparacao) !== -1) {
            segundoResto = mod(base, segundoMultiplicador, 10);
            segundoDigito = segundoResto === 0 ? 0 : 10 - segundoResto;
            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador, 10);
            primeiroDigito = primeiroResto === 0 ? 0 : 10 - primeiroResto;
        }
        else {
            segundoResto = mod(base, segundoMultiplicador);
            segundoDigito = substracaoPor11SeMaiorQue2CasoContrario0(segundoResto);
            primeiroResto = mod(base + segundoDigito, primeiroMultiplicador);
            primeiroDigito = substracaoPor11SeMaiorQue2CasoContrario0(primeiroResto);
        }
        return base + primeiroDigito + segundoDigito;
    },
    ce: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    df: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        if (naoComecaCom(valor, '07') && naoComecaCom(valor, '08')) {
            return false;
        }
        var base = primeiros(valor, 11);
        var primeiro = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro));
        return base + primeiro + segundo;
    },
    es: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    go: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        // Verifica os digitos iniciais do estado
        // Fonte: https://appasp.economia.go.gov.br/Legislacao/arquivos/Secretario/IN/IN_1535_2022.htm
        if (['10', '11', '15', '20'].indexOf(valor.substring(0, 2)) === -1) {
            return false;
        }
        var base = primeiros(valor);
        if (base === '11094402') {
            return valor.substr(8) === '1' || valor.substr(8) === '0';
        }
        var resto = mod(base);
        var digito;
        if (resto === 0) {
            digito = 0;
        }
        else if (resto === 1) {
            if (entre(base, 10103105, 10119997)) {
                digito = 1;
            }
            else {
                digito = 0;
            }
        }
        else {
            digito = 11 - resto;
        }
        return base + digito;
    },
    ma: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '12')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mg: function (valor) {
        if (tamanhoNaoE(valor, 13)) {
            return false;
        }
        var base = primeiros(valor, 11);
        var baseComZero = valor.substring(0, 3) + '0' + valor.substring(3, 11);
        var i = 0;
        var produtorioLiteral = baseComZero.split('').reduceRight(function (anterior, atual) {
            if (i > [2, 1].length - 1) {
                i = 0;
            }
            return ([2, 1][i++] * parseInt(atual, 10)).toString() + anterior.toString();
        }, '').split('').reduce(function (anterior, atual) {
            return anterior + parseInt(atual, 10);
        }, 0);
        var primeiro = ((Math.floor(produtorioLiteral / 10) + 1) * 10) - produtorioLiteral;
        if (primeiro === 10) {
            primeiro = 0;
        }
        var segundo = substracaoPor11SeMaiorQue2CasoContrario0(mod(base + primeiro, serie(2, 11)));
        return base + primeiro + segundo;
    },
    ms: function (valor) {
        if (naoComecaCom(valor, '28')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    mt: function (valor) {
        if (tamanhoNaoE(valor, 11) && tamanhoNaoE(valor)) {
            return false;
        }
        var base = tamanhoE(valor, 11) ? valor.substring(0, 10) : primeiros(valor);
        return calculoTrivialGenerate(valor, base, true);
    },
    pa: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '15') && naoComecaCom(valor, '75')) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pb: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    pe: function (valor) {
        var base = valor.substring(0, valor.length - 2);
        var restoPrimeiro = mod(base);
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro);
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    pi: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    pr: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor);
        var restoPrimeiro = mod(base, serie(2, 7));
        var primeiro = 11 - restoPrimeiro >= 10 ? 0 : 11 - restoPrimeiro;
        var restoSegundo = mod(base + primeiro, serie(2, 7));
        var segundo = 11 - restoSegundo >= 10 ? 0 : 11 - restoSegundo;
        return base + primeiro + segundo;
    },
    rj: function (valor) {
        if (tamanhoNaoE(valor, 8)) {
            return false;
        }
        var base = primeiros(valor, 7);
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base, serie(2, 7)));
        return base + digito;
    },
    rn: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 10)) {
            return false;
        }
        if (naoComecaCom(valor, '20')) {
            return false;
        }
        var base = valor.substring(0, valor.length - 1);
        var multiplicadores = serie(2, 9);
        if (tamanhoE(valor, 10)) {
            multiplicadores.push(10);
        }
        var resto = (mod(base, multiplicadores) * 10) % 11;
        var digito = resto === 10 ? 0 : resto;
        return base + digito;
    },
    ro: function (valor) {
        var base, digito, resultadoMod;
        if (tamanhoE(valor, 9)) {
            base = valor.substring(3, 8);
            digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
            return valor === valor.substring(0, 3) + base + digito;
        }
        else if (tamanhoE(valor, 14)) {
            base = primeiros(valor, 13);
            resultadoMod = mod(base);
            digito = resultadoMod <= 1 ? 1 : 11 - resultadoMod;
            return base + digito;
        }
        else {
            return false;
        }
    },
    rr: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        if (naoComecaCom(valor, '24')) {
            return false;
        }
        var base = primeiros(valor);
        var digito = mod(base, [8, 7, 6, 5, 4, 3, 2, 1], 9);
        return base + digito;
    },
    rs: function (valor) {
        if (tamanhoNaoE(valor, 10)) {
            return false;
        }
        var base = primeiros(valor, 9);
        return calculoTrivialGenerate(valor, base, true);
    },
    sc: function (valor) {
        return calculoTrivialGenerate(valor);
    },
    se: function (valor) {
        if (tamanhoNaoE(valor)) {
            return false;
        }
        return calculoTrivialGenerate(valor);
    },
    sp: function (valor) {
        valor = valor.toUpperCase();
        var segundaBase;
        if (valor.substr(0, 1) === 'P') {
            if (tamanhoNaoE(valor, 13)) {
                return false;
            }
            var base = valor.substring(1, 9);
            segundaBase = valor.substring(10, 13);
            var resto = mod(base, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var digito = resto.length > 1 ? resto[1] : resto[0];
            return 'P' + base + digito + segundaBase;
        }
        else {
            if (tamanhoNaoE(valor, 12)) {
                return false;
            }
            var primeiraBase = primeiros(valor);
            segundaBase = valor.substring(9, 11);
            var primeiroResto = mod(primeiraBase, [10, 8, 7, 6, 5, 4, 3, 1]).toString();
            var primeiro = primeiroResto.length > 1 ? primeiroResto[1] : primeiroResto[0];
            var segundoResto = mod(primeiraBase + primeiro + segundaBase, serie(2, 10)).toString();
            var segundo = segundoResto.length > 1 ? segundoResto[1] : segundoResto[0];
            return primeiraBase + primeiro + segundaBase + segundo;
        }
    },
    to: function (valor) {
        if (tamanhoNaoE(valor) && tamanhoNaoE(valor, 11)) {
            return false;
        }
        var base;
        if (tamanhoE(valor, 11)) {
            if (['01', '02', '03', '99'].indexOf(valor.substring(2, 4)) === -1) {
                return false;
            }
            base = valor.substring(0, 2) + valor.substring(4, 10);
        }
        else {
            base = primeiros(valor);
        }
        var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
        return valor.substring(0, valor.length - 1) + digito;
    },
};
var funcoes = {
    ac: function (valor) {
        return valor === exports.generateInscricaoEstadual['ac'](valor);
    },
    am: function (valor) {
        return valor === exports.generateInscricaoEstadual['am'](valor);
    },
    al: function (valor) {
        return valor === exports.generateInscricaoEstadual['al'](valor);
    },
    ap: function (valor) {
        return valor === exports.generateInscricaoEstadual['ap'](valor);
    },
    ba: function (valor) {
        return valor === exports.generateInscricaoEstadual['ba'](valor);
    },
    ce: function (valor) {
        return valor === exports.generateInscricaoEstadual['ce'](valor);
    },
    df: function (valor) {
        return valor === exports.generateInscricaoEstadual['df'](valor);
    },
    es: function (valor) {
        return valor === exports.generateInscricaoEstadual['es'](valor);
    },
    go: function (valor) {
        return valor === exports.generateInscricaoEstadual['go'](valor);
    },
    ma: function (valor) {
        return valor === exports.generateInscricaoEstadual['ma'](valor);
    },
    mg: function (valor) {
        return valor === exports.generateInscricaoEstadual['mg'](valor);
    },
    ms: function (valor) {
        return valor === exports.generateInscricaoEstadual['ms'](valor);
    },
    mt: function (valor) {
        return valor === exports.generateInscricaoEstadual['mt'](valor);
    },
    pa: function (valor) {
        return valor === exports.generateInscricaoEstadual['pa'](valor);
    },
    pb: function (valor) {
        return valor === exports.generateInscricaoEstadual['pb'](valor);
    },
    pe: function (valor) {
        return valor === exports.generateInscricaoEstadual['pe'](valor);
    },
    pi: function (valor) {
        return valor === exports.generateInscricaoEstadual['pi'](valor);
    },
    pr: function (valor) {
        return valor === exports.generateInscricaoEstadual['pr'](valor);
    },
    rj: function (valor) {
        return valor === exports.generateInscricaoEstadual['rj'](valor);
    },
    rn: function (valor) {
        return valor === exports.generateInscricaoEstadual['rn'](valor);
    },
    ro: function (valor) {
        return valor === exports.generateInscricaoEstadual['ro'](valor);
    },
    rr: function (valor) {
        return valor === exports.generateInscricaoEstadual['rr'](valor);
    },
    rs: function (valor) {
        return valor === exports.generateInscricaoEstadual['rs'](valor);
    },
    sc: function (valor) {
        return valor === exports.generateInscricaoEstadual['sc'](valor);
    },
    se: function (valor) {
        return valor === exports.generateInscricaoEstadual['se'](valor);
    },
    sp: function (valor) {
        return valor === exports.generateInscricaoEstadual['sp'](valor);
    },
    to: function (valor) {
        return valor === exports.generateInscricaoEstadual['to'](valor);
    },
};
function validate_inscricaoestadual(ie, estado) {
    if (eIndefinido(estado) || estado === null) {
        estado = '';
    }
    estado = estado.toLowerCase();
    if (estado !== '' && !(estado in funcoes)) {
        return new Error('estado não é válido');
    }
    if (eIndefinido(ie)) {
        return new Error('ie deve ser fornecida');
    }
    if (Array.isArray(ie)) {
        var retorno_1 = true;
        ie.forEach(function (i) {
            if (!validate_inscricaoestadual(i, estado)) {
                retorno_1 = false;
            }
        });
        return retorno_1;
    }
    if (typeof ie !== 'string') {
        return new Error('ie deve ser string ou array de strings');
    }
    if (!utils_1.allNumbersAreSame(ie)) {
        return new Error('ie com todos dígitos iguais');
    }
    if (ie.match(/^ISENTO$/i)) {
        return true;
    }
    ie = ie.replace(/[\.|\-|\/|\s]/g, '');
    if (estado === '') {
        if (lookup(ie)) {
            return true;
        }
        else {
            return false;
        }
    }
    if (/^\d+$/.test(ie) || estado === 'sp' || funcoes[estado]) {
        return funcoes[estado](ie);
    }
    return false;
}
exports.validate_inscricaoestadual = validate_inscricaoestadual;
exports.MASKSIE = {
    ac: {
        text: '01.004.823/001-12',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    al: {
        text: '240000048',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    am: {
        text: '04.145.871-0',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    ap: {
        text: '240000048',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    ba: {
        text: '1234567-48',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        textMaskFunction: function mask(userInput) {
            var numberLength = getSizeNumbers(userInput);
            if (!userInput || numberLength > 8) {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
        }
    },
    ce: {
        text: '06.000001-5',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    df: {
        text: '06 000001 123-55',
        textMask: [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    es: {
        text: '082.560.67-6',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    go: {
        text: '06.000.001-5',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    ma: {
        text: '12.104.376-2',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    mg: {
        text: '001.819.263/0048',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
    },
    ms: {
        text: '001819263',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    mt: {
        text: '0018192630-1',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pa: {
        text: '06-000001-5',
        textMask: [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pb: {
        text: '06000001-5',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    pe: {
        text: '0192310-24',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    pi: {
        text: '19.301.656-7',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/]
    },
    pr: {
        text: '19301656-78',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    rj: {
        text: '20.040.04-1',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    rn: {
        text: '20.040.040-1',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
        textMaskFunction: function mask(userInput) {
            var numberLength = getSizeNumbers(userInput);
            if (!userInput || numberLength > 9) {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
            }
        }
    },
    ro: {
        text: '101.62521-3',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    rr: {
        text: '24006628-1',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    rs: {
        text: '024/0440013',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    sc: {
        text: '271.234.563',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    se: {
        text: '27123456-3',
        textMask: [/\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    sp: {
        text: '114.814.878.119',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    to: {
        text: '11 81 4878119',
        textMask: [/\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
};
function getSizeNumbers(userInput) {
    var numbers = userInput.match(/\d/g);
    var numberLength = 0;
    if (numbers) {
        numberLength = numbers.join('').length;
    }
    return numberLength;
}
function eIndefinido(objeto) {
    return typeof objeto === typeof undefined;
}
function tamanhoNaoE(string, tamanho) {
    if (tamanho === void 0) { tamanho = 9; }
    if (eIndefinido(tamanho)) {
        tamanho = 9;
    }
    return string.length !== tamanho;
}
function tamanhoE(string, tamanho) {
    return !tamanhoNaoE(string, tamanho);
}
function serie(de, ate) {
    var resultado = [];
    while (de <= ate) {
        resultado.push(de++);
    }
    return resultado;
}
function primeiros(string, quantidade) {
    if (quantidade === void 0) { quantidade = 8; }
    if (eIndefinido(quantidade)) {
        quantidade = 8;
    }
    return string.substring(0, quantidade);
}
function substracaoPor11SeMaiorQue2CasoContrario0(valor) {
    return valor < 2 ? 0 : 11 - valor;
}
function mod(valor, multiplicadores, divisor) {
    if (multiplicadores === void 0) { multiplicadores = serie(2, 9); }
    if (divisor === void 0) { divisor = 11; }
    if (eIndefinido(divisor)) {
        divisor = 11;
    }
    if (eIndefinido(multiplicadores)) {
        multiplicadores = serie(2, 9);
    }
    var i = 0;
    return valor.split('').reduceRight(function (anterior, atual) {
        if (i > multiplicadores.length - 1) {
            i = 0;
        }
        return (multiplicadores[i++] * parseInt(atual, 10)) + anterior;
    }, 0) % divisor;
}
function calculoTrivialGenerate(valor, base, validarTamanho) {
    if (base === void 0) { base = null; }
    if (validarTamanho === void 0) { validarTamanho = false; }
    if (!validarTamanho && tamanhoNaoE(valor)) {
        return false;
    }
    if (eIndefinido(base)) {
        base = primeiros(valor);
    }
    if (!base) {
        base = primeiros(valor);
    }
    var digito = substracaoPor11SeMaiorQue2CasoContrario0(mod(base));
    return base + digito;
}
function naoComecaCom(string, valor) {
    return string.substring(0, valor.length) !== valor;
}
function entre(valor, limiteInferior, limiteSuperior) {
    if (typeof valor === 'string') {
        valor = parseInt(valor, 10);
    }
    return valor >= limiteInferior && valor <= limiteSuperior;
}
function lookup(ie) {
    var resultado = [];
    for (var estado in funcoes) {
        if (funcoes[estado](ie)) {
            resultado.push(estado);
        }
    }
    if (tamanhoE(resultado, 0)) {
        return false;
    }
    else {
        return resultado;
    }
}

},{"./utils":12}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iptu_validate_1 = require("./iptu_validate");
var iptu_mask_1 = require("./iptu_mask");
var utils_1 = require("./utils");
var iptu_create_1 = require("./iptu_create");
exports.create_iptu = function (number, estado, cidade) {
    if (!iptu_create_1.IPTUCREATE[estado] || !iptu_create_1.IPTUCREATE[estado][cidade]) {
        return true;
    }
    number = utils_1.getAllDigits(number);
    return iptu_create_1.IPTUCREATE[estado][cidade](number);
};
exports.mask_iptu = function (number, estado, cidade) {
    if (!iptu_mask_1.IPTUMASKS[estado] || !iptu_mask_1.IPTUMASKS[estado][cidade]) {
        return number;
    }
    return iptu_mask_1.IPTUMASKS[estado][cidade];
};
exports.validate_iptu = function (number, estado, cidade) {
    if (!iptu_validate_1.IPTUVALIDATE[estado] || !iptu_validate_1.IPTUVALIDATE[estado][cidade]) {
        return true;
    }
    number = utils_1.getAllDigits(number);
    return iptu_validate_1.IPTUVALIDATE[estado][cidade](number);
};

},{"./iptu_create":6,"./iptu_mask":7,"./iptu_validate":8,"./utils":12}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var iptu_mask_1 = require("./iptu_mask");
function create_iptu_ctba(number) {
    number = utils_1.getAllDigits(number);
    var a1 = parseInt(number.slice(10));
    var a2 = parseInt(number.slice(9, 10));
    var a3 = parseInt(number.slice(8, 9));
    var a4 = parseInt(number.slice(7, 8));
    var a5 = parseInt(number.slice(6, 7));
    var a6 = parseInt(number.slice(5, 6));
    var a7 = parseInt(number.slice(4, 5));
    var a8 = parseInt(number.slice(3, 4));
    var a9 = parseInt(number.slice(2, 3));
    var a10 = parseInt(number.slice(1, 2));
    var a11 = parseInt(number.slice(0, 1));
    var iptuctbaDV = 10 - ((a1 * 2 + a2 * 3 + a3 * 4 + a4 * 7 + a5 * 8 + a6 * 9 + a7 * 2 + a8 * 3 + a9 * 4 + a10 * 7 + a11 * 8) % 10);
    if (iptuctbaDV == 10) {
        iptuctbaDV = 0;
    }
    return iptuctbaDV;
}
exports.create_iptu_ctba = create_iptu_ctba;
function create_iptu_sp(number) {
    var a1 = parseInt(number.slice(9));
    var a2 = parseInt(number.slice(8, 9));
    var a3 = parseInt(number.slice(7, 8));
    var a4 = parseInt(number.slice(6, 7));
    var a5 = parseInt(number.slice(5, 6));
    var a6 = parseInt(number.slice(4, 5));
    var a7 = parseInt(number.slice(3, 4));
    var a8 = parseInt(number.slice(2, 3));
    var a9 = parseInt(number.slice(1, 2));
    var a10 = parseInt(number.slice(0, 1));
    var iptuspDV = (a1 * 9 + a2 * 8 + a3 * 7 + a4 * 6 + a5 * 5 + a6 * 4 + a7 * 3 + a8 * 2 + a9 + a10 * 10) % 11;
    if (iptuspDV == 10) {
        iptuspDV = 1;
    }
    return iptuspDV;
}
exports.create_iptu_sp = create_iptu_sp;
exports.faker_iptu = function (estado, cidade) {
    if (!iptu_mask_1.IPTUMASKS[estado] || !iptu_mask_1.IPTUMASKS[estado][cidade]) {
        return;
    }
    var iptu = utils_1.makeGenericFaker(iptu_mask_1.IPTUMASKS[estado][cidade])();
    if (exports.IPTUCREATE[estado] && exports.IPTUCREATE[estado][cidade]) {
        var dv = exports.IPTUCREATE[estado][cidade](iptu);
        var values = iptu.split('');
        values[values.length - 1] = dv;
        iptu = values.join('');
    }
    return iptu;
};
exports.IPTUCREATE = {
    'sao-paulo': {
        'sao-paulo': create_iptu_sp,
    },
    'parana': {
        'curitiba': create_iptu_ctba
    }
};

},{"./iptu_mask":7,"./utils":12}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPTUMASKS = {
    'minas-gerais': {
        'belo-horizonte': {
            text: '000.000.000.000.0',
            textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/]
        },
        'contagem': {
            text: '20.040.040-1',
            textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
            textMaskFunction: function mask(userInput) {
                var numbers = userInput.match(/\d/g);
                var numberLength = 0;
                if (numbers) {
                    numberLength = numbers.join('').length;
                }
                if (!userInput || numberLength > 9) {
                    return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
                }
                else {
                    return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
                }
            }
        }
    },
    'sao-paulo': {
        'sao-paulo': {
            text: '00000000000-0',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
        }
    },
    'parana': {
        'curitiba': {
            text: '00000000000-0',
            textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
        }
    }
};

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var iptu_create_1 = require("./iptu_create");
var validateRemoveDigito = function (number, max) {
    number = utils_1.getAllDigits(number.toString());
    if (number.length > max) {
        return false;
    }
    else if (number.length === max) {
        number = number.slice(0, -1);
    }
    return number;
};
function validate_iptu_ctba(value) {
    var number = validateRemoveDigito(value, 12);
    if (!number) {
        return false;
    }
    var dv = iptu_create_1.IPTUCREATE['parana']['curitiba'](number);
    return parseInt(value[value.length - 1]) === dv;
}
exports.validate_iptu_ctba = validate_iptu_ctba;
/**
 * Índice Cadastral, ou inscrição imobiliária,  é o número de identificação do imóvel no cadastro da Prefeitura de Contagem.
 * O índice é composto por 12 (doze) ou 13 (treze) números, sendo: 2 (dois) para a zona fiscal;
 * 3 (três) ou 4 (quatro) para a quadra fiscal; 4 (quatro) para o lote fiscal; e 3 (três) para a unidade.
 */
function validate_iptu_contagem(number) {
    number = validateRemoveDigito(number, 12);
    if (!number) {
        return false;
    }
    return true;
}
exports.validate_iptu_contagem = validate_iptu_contagem;
function validate_iptu_sp(value) {
    var number = validateRemoveDigito(value, 12);
    if (!number) {
        return false;
    }
    var dv = iptu_create_1.IPTUCREATE['sao-paulo']['sao-paulo'](number);
    return parseInt(value[value.length - 1]) === dv;
}
exports.validate_iptu_sp = validate_iptu_sp;
// export function validate_iptu(iptu: string) {
//   let iptuClean = iptu.replace(/\./g, '');
//   iptuClean = iptuClean.replace(/-/g, '');
//   const exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
//   const expClean = /[a-z]{2}\d{8}/;
//   const state = iptu.substr(0, 2).toUpperCase();
//   if (!exp.test(iptu) && !expClean.test(iptuClean) && !(state in CEPRange)) {
//     return false;
//   }
//   if (IPTU[state]) {
//     const validateState = IPTU[state];
//     return validateState(iptu);
//   }
//   return true;
// }
exports.IPTUVALIDATE = {
    'sao-paulo': {
        'sao-paulo': validate_iptu_sp,
    },
    'minas-gerais': {
        'contagem': validate_iptu_contagem,
    },
    'parana': {
        'curitiba': validate_iptu_ctba
    }
};

},{"./iptu_create":6,"./utils":12}],9:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
exports.MASKSIE = inscricaoestadual_1.MASKSIE;
var createNumberMask_1 = require("text-mask-addons/dist/createNumberMask");
var iptu_1 = require("./iptu");
var inscricaoestadual_2 = require("./inscricaoestadual");
var maskNumber = {
    decimalLimit: 2,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    allowDecimal: true,
    integerLimit: 17,
    prefix: '',
    suffix: ''
};
exports.MASKS = {
    aih: {
        text: '000000000000-0',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    cartaocredito: {
        text: '0000 0000 0000 0000 00/00 000',
        textMask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '0', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]
    },
    celular: {
        text: '(00) 00000-0000',
        textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[5-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    },
    cep: {
        text: '00.000-000',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
    },
    // certidao Certidões de Nascimento, Casamento ou Óbito 
    certidao: {
        text: '000000.00.00.0000.0.00000.000.0000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, '.',
            /\d/, /\d/, /\d/, /\d/, '.', /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.',
            /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    chassi: {
        text: 'AAA AAAAAA AA AA0000',
        textMask: [/[1-9]/, /\w/, /\w/, ' ', /\w/, /\w/, /\w/, /\w/, /\w/, /\w/, ' ', /\w/, /\w/, ' ', /\w/, /\w/, /\d/, /\d/, /\d/, /\d/]
    },
    cid: {
        textMask: false
    },
    cnae: {
        text: '0000-0/00',
        textMask: [/\d/, /\d/, /\d/, /\d/, '-', /\d/, '/', /\d/, /\d/]
    },
    cnh: {
        text: '000000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    renachseguranca: {
        text: '00000000000',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    renachestadual: {
        text: 'AA000000000',
        textMask: [/[A-S]/, /[A-Z]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    cnhespelho: {
        text: '0000000000',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    },
    cnpj: {
        text: '00.000.000/0000-00',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    cns: {
        text: '000 0000 0000 00-00',
        textMask: [/[1|2|7|8|9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, '-', /\d/, /\d/]
    },
    contabanco: {
        text: '000 00000-0 00000-0',
        textMask: [/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-',
            /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    cpf: {
        text: '000.000.000-00',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
    },
    cpfcnpj: {
        text: '00.000.000/0000-00',
        textMask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 12) {
                return [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
            else {
                return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
            }
        }
    },
    currency: {
        text: '0.000,00',
        textMask: createNumberMask_1.default(__assign({}, maskNumber, { prefix: 'R$ ', allowNegative: true }))
    },
    data: {
        text: '00/00/0000',
        textMask: [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    date: {
        text: '00/00/0000',
        textMask: [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    datetime: {
        text: '00/00/0000 00:00',
        textMask: [/[0-1]/, /[0-9]/, '/', /[0-3]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /[0-5]/, /\d/]
    },
    datahora: {
        text: '00/00/0000 00:00',
        textMask: [/[0-3]/, /[0-9]/, '/', /[0-1]/, /[0-9]/, '/', /[0-2]/, /[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /[0-5]/, /\d/]
    },
    ect: {
        text: '00000000-0',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/]
    },
    endereco: {
        text: '0000.0000.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    iptu: {
        text: '0000.0000.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    number: {
        text: '0.000,00',
        textMask: createNumberMask_1.default(maskNumber)
    },
    porcentagem: {
        text: '00,00%',
        textMask: createNumberMask_1.default(__assign({}, maskNumber, { suffix: '%' }))
    },
    pispasep: {
        text: '000.00000.00-0',
        textMask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '-', /\d/]
    },
    placa: {
        text: 'AAA-0000',
        textMask: [/[A-S]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/, /\d/]
    },
    processo: {
        text: '0000000-00.0000.AAA.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[A-Za-z]/, /[A-Za-z]/, /[A-Za-z]/, '.', /\d/, /\d/, /\d/, /\d/]
    },
    renavam: {
        text: '0000000000-00',
        textMask: [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength < 9) {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            }
            else {
                return [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
            }
        }
    },
    rg: {
        text: 'AA-00.000.000',
        textMask: [/[A-Za-z]/, /[A-Za-z]/, '-', /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/]
    },
    sped: {
        text: '0000.0000.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    telefone: {
        text: '(00) 00000-0000',
        textMask: ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        textMaskFunction: function mask(userInput) {
            var numbers = userInput.match(/\d/g);
            var numberLength = 0;
            if (numbers) {
                numberLength = numbers.join('').length;
            }
            if (!userInput || numberLength > 10) {
                return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
            else {
                return ['(', /[1-9]/, /\d/, ')', ' ', /[1-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        }
    },
    time: {
        text: '00:00',
        textMask: [/\d/, /\d/, ':', /[0-5]/, /\d/]
    },
    titulo: {
        text: '0000.0000.0000',
        textMask: [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/, '.', /[0-2]/, /[0-9]/, /\d/, /\d/]
    },
    utils: {
        numberToString: function (n) {
            if (!n || typeof n === 'string') {
                return n;
            }
            return (n.toString()).replace('.', ',');
        },
        textMask: false
    }
};
var makeGeneric = function (key) {
    return function (value) {
        if (!value) {
            return '';
        }
        var mask = exports.MASKS[key].textMask;
        var textMaskFunction = exports.MASKS[key].textMaskFunction;
        if (typeof textMaskFunction === 'function') {
            mask = textMaskFunction(value);
        }
        return conformToMask(value, mask, { guide: false }).conformedValue;
    };
};
exports.maskBr = {
    aih: makeGeneric('aih'),
    celular: makeGeneric('celular'),
    cep: makeGeneric('cep'),
    certidao: makeGeneric('certidao'),
    chassi: makeGeneric('chassi'),
    cnae: makeGeneric('cnae'),
    cnh: makeGeneric('cnh'),
    renachseguranca: makeGeneric('renachseguranca'),
    renachestadual: makeGeneric('renachestadual'),
    cnhespelho: makeGeneric('cnhespelho'),
    cnpj: makeGeneric('cnpj'),
    cns: makeGeneric('cns'),
    contabanco: makeGeneric('contabanco'),
    cpf: makeGeneric('cpf'),
    cpfcnpj: makeGeneric('cpfcnpj'),
    cartaocredito: makeGeneric('cartaocredito'),
    currency: function (currencyValueInput, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS['currency'], currencyValueInput, decimalsFormat);
    },
    data: makeGeneric('data'),
    date: makeGeneric('date'),
    datetime: makeGeneric('datetime'),
    datahora: makeGeneric('datahora'),
    ect: makeGeneric('ect'),
    endereco: makeGeneric('endereco'),
    inscricaoestadual: function (inscricaoestadualValue, estado) {
        var ie = inscricaoestadual_2.MASKSIE;
        var ieState = ie[estado];
        if (!inscricaoestadualValue || !estado || !ieState ||
            !ieState.textMask) {
            return '';
        }
        var mask = ieState.textMask;
        var textMaskFunction = ieState.textMaskFunction;
        if (typeof textMaskFunction === 'function') {
            mask = textMaskFunction(inscricaoestadualValue);
        }
        return conformToMask(inscricaoestadualValue, mask, { guide: false }).conformedValue;
    },
    iptu: function (iptuValue, estado, cidade) {
        var mask = iptu_1.mask_iptu(iptuValue, estado, cidade);
        if (!mask || typeof mask === 'string') {
            return '';
        }
        return conformToMask(iptuValue, mask.textMask, { guide: false }).conformedValue;
    },
    number: function (numberValue, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS['number'], numberValue, decimalsFormat);
    },
    porcentagem: function (porcentagemValue, decimalsFormat) {
        if (decimalsFormat === void 0) { decimalsFormat = 2; }
        return formatNumber(exports.MASKS['porcentagem'], porcentagemValue, decimalsFormat);
    },
    pispasep: makeGeneric('pispasep'),
    placa: makeGeneric('placa'),
    processo: makeGeneric('processo'),
    renavam: makeGeneric('renavam'),
    rg: makeGeneric('rg'),
    sped: makeGeneric('sped'),
    telefone: makeGeneric('telefone'),
    time: function (value) {
        if (value instanceof Date) {
            value = value.toTimeString().split(' ')[0];
        }
        return makeGeneric('time')(value);
    },
    titulo: makeGeneric('titulo')
};
/**
 * FROM TEXT-MASK
 */
exports.placeholderChar = '_';
exports.strFunction = 'function';
var defaultPlaceholderChar = exports.placeholderChar;
var emptyArray = [];
var emptyString = '';
function conformToMask(inputValue, mask, config) {
    if (inputValue === void 0) { inputValue = emptyString; }
    if (mask === void 0) { mask = emptyArray; }
    if (config === void 0) { config = {}; }
    var rawValue = inputValue.toString();
    if (typeof inputValue === 'number') {
        rawValue = inputValue.toString();
    }
    if (inputValue instanceof Date) {
        rawValue = inputValue.toLocaleString("pt-br");
    }
    if (!utils_1.isArray(mask)) {
        // If someone passes a function as the mask property, we should call the
        // function to get the mask array - Normally this is handled by the
        // `createTextMaskInputElement:update` function - this allows mask functions
        // to be used directly with `conformToMask`
        if (typeof mask === exports.strFunction) {
            // call the mask function to get the mask array
            mask = mask(inputValue, config);
            // mask functions can setup caret traps to have some control over how the caret moves. We need to process
            // the mask for any caret traps. `processCaretTraps` will remove the caret traps from the mask
            mask = utils_1.processCaretTraps(mask).maskWithoutCaretTraps;
        }
        else {
            throw new Error('Text-mask:conformToMask; The mask property must be an array.');
        }
    }
    // These configurations tell us how to conform the mask
    var guide = config.guide || true;
    var previousConformedValue = config.previousConformedValue || emptyString;
    var placeholder = convertMaskToPlaceholder(mask, exports.placeholderChar);
    var currentCaretPosition = config.currentCaretPosition;
    var keepCharPositions = config.keepCharPositions;
    // The configs below indicate that the user wants the algorithm to work in *no guide* mode
    var suppressGuide = guide === false && previousConformedValue !== undefined;
    // Calculate lengths once for performance
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var maskLength = mask.length;
    // This tells us the number of edited characters and the direction in which they were edited (+/-)
    var editDistance = rawValueLength - previousConformedValueLength;
    // In *no guide* mode, we need to know if the user is trying to add a character or not
    var isAddition = editDistance > 0;
    // Tells us the index of the first change. For (438) 394-4938 to (38) 394-4938, that would be 1
    var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
    // We're also gonna need the index of last change, which we can derive as follows...
    var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);
    // If `conformToMask` is configured to keep character positions, that is, for mask 111, previous value
    // _2_ and raw value 3_2_, the new conformed value should be 32_, not 3_2 (default behavior). That's in the case of
    // addition. And in the case of deletion, previous value _23, raw value _3, the new conformed string should be
    // __3, not _3_ (default behavior)
    //
    // The next block of logic handles keeping character positions for the case of deletion. (Keeping
    // character positions for the case of addition is further down since it is handled differently.)
    // To do this, we want to compensate for all characters that were deleted
    if (keepCharPositions === true && !isAddition) {
        // We will be storing the new placeholder characters in this variable.
        var compensatingPlaceholderChars = emptyString;
        // For every character that was deleted from a placeholder position, we add a placeholder char
        for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                compensatingPlaceholderChars += exports.placeholderChar;
            }
        }
        // Now we trick our algorithm by modifying the raw value to make it contain additional placeholder characters
        // That way when the we start laying the characters again on the mask, it will keep the non-deleted characters
        // in their positions.
        rawValue = (rawValue.slice(0, indexOfFirstChange) +
            compensatingPlaceholderChars +
            rawValue.slice(indexOfFirstChange, rawValueLength));
    }
    // Convert `rawValue` string to an array, and mark characters based on whether they are newly added or have
    // existed in the previous conformed value. Identifying new and old characters is needed for `conformToMask`
    // to work if it is configured to keep character positions.
    var rawValueArr = rawValue
        .split(emptyString)
        .map(function (char, i) { return ({ char: char, isNew: i >= indexOfFirstChange && i < indexOfLastChange }); });
    // The loop below removes masking characters from user input. For example, for mask
    // `00 (111)`, the placeholder would be `00 (___)`. If user input is `00 (234)`, the loop below
    // would remove all characters but `234` from the `rawValueArr`. The rest of the algorithm
    // then would lay `234` on top of the available placeholder positions in the mask.
    for (var i = rawValueLength - 1; i >= 0; i--) {
        var char = rawValueArr[i].char;
        if (char !== exports.placeholderChar) {
            var shouldOffset = i >= indexOfFirstChange && previousConformedValueLength === maskLength;
            if (char === placeholder[(shouldOffset) ? i - editDistance : i]) {
                rawValueArr.splice(i, 1);
            }
        }
    }
    // This is the variable that we will be filling with characters as we figure them out
    // in the algorithm below
    var conformedValue = emptyString;
    var someCharsRejected = false;
    // Ok, so first we loop through the placeholder looking for placeholder characters to fill up.
    placeholderLoop: for (var i = 0; i < placeholderLength; i++) {
        var charInPlaceholder = placeholder[i];
        // We see one. Let's find out what we can put in it.
        if (charInPlaceholder === exports.placeholderChar) {
            // But before that, do we actually have any user characters that need a place?
            if (rawValueArr.length > 0) {
                // We will keep chipping away at user input until either we run out of characters
                // or we find at least one character that we can map.
                while (rawValueArr.length > 0) {
                    // Let's retrieve the first user character in the queue of characters we have left
                    var shift = rawValueArr.shift();
                    var rawValueChar = '', isNew = false;
                    if (shift) {
                        rawValueChar = shift.char;
                        isNew = shift.isNew;
                    }
                    // If the character we got from the user input is a placeholder character (which happens
                    // regularly because user input could be something like (540) 90_-____, which includes
                    // a bunch of `_` which are placeholder characters) and we are not in *no guide* mode,
                    // then we map this placeholder character to the current spot in the placeholder
                    if (rawValueChar === exports.placeholderChar && suppressGuide !== true) {
                        conformedValue += exports.placeholderChar;
                        // And we go to find the next placeholder character that needs filling
                        continue placeholderLoop;
                        // Else if, the character we got from the user input is not a placeholder, let's see
                        // if the current position in the mask can accept it.
                    }
                    else if (mask[i].test(rawValueChar)) {
                        // we map the character differently based on whether we are keeping character positions or not.
                        // If any of the conditions below are met, we simply map the raw value character to the
                        // placeholder position.
                        if (keepCharPositions !== true ||
                            isNew === false ||
                            previousConformedValue === emptyString ||
                            guide === false ||
                            !isAddition) {
                            conformedValue += rawValueChar;
                        }
                        else {
                            // We enter this block of code if we are trying to keep character positions and none of the conditions
                            // above is met. In this case, we need to see if there's an available spot for the raw value character
                            // to be mapped to. If we couldn't find a spot, we will discard the character.
                            //
                            // For example, for mask `1111`, previous conformed value `_2__`, raw value `942_2__`. We can map the
                            // `9`, to the first available placeholder position, but then, there are no more spots available for the
                            // `4` and `2`. So, we discard them and end up with a conformed value of `92__`.
                            var rawValueArrLength = rawValueArr.length;
                            var indexOfNextAvailablePlaceholderChar = null;
                            // Let's loop through the remaining raw value characters. We are looking for either a suitable spot, ie,
                            // a placeholder character or a non-suitable spot, ie, a non-placeholder character that is not new.
                            // If we see a suitable spot first, we store its position and exit the loop. If we see a non-suitable
                            // spot first, we exit the loop and our `indexOfNextAvailablePlaceholderChar` will stay as `null`.
                            for (var i_1 = 0; i_1 < rawValueArrLength; i_1++) {
                                var charData = rawValueArr[i_1];
                                if (charData.char !== exports.placeholderChar && charData.isNew === false) {
                                    break;
                                }
                                if (charData.char === exports.placeholderChar) {
                                    indexOfNextAvailablePlaceholderChar = i_1;
                                    break;
                                }
                            }
                            // If `indexOfNextAvailablePlaceholderChar` is not `null`, that means the character is not blocked.
                            // We can map it. And to keep the character positions, we remove the placeholder character
                            // from the remaining characters
                            if (indexOfNextAvailablePlaceholderChar !== null) {
                                conformedValue += rawValueChar;
                                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                                // If `indexOfNextAvailablePlaceholderChar` is `null`, that means the character is blocked. We have to
                                // discard it.
                            }
                            else {
                                i--;
                            }
                        }
                        // Since we've mapped this placeholder position. We move on to the next one.
                        continue placeholderLoop;
                    }
                    else {
                        someCharsRejected = true;
                    }
                }
            }
            // We reach this point when we've mapped all the user input characters to placeholder
            // positions in the mask. In *guide* mode, we append the left over characters in the
            // placeholder to the `conformedString`, but in *no guide* mode, we don't wanna do that.
            //
            // That is, for mask `(111)` and user input `2`, we want to return `(2`, not `(2__)`.
            if (suppressGuide === false) {
                conformedValue += placeholder.substr(i, placeholderLength);
            }
            // And we break
            break;
            // Else, the charInPlaceholder is not a placeholderChar. That is, we cannot fill it
            // with user input. So we just map it to the final output
        }
        else {
            conformedValue += charInPlaceholder;
        }
    }
    // The following logic is needed to deal with the case of deletion in *no guide* mode.
    //
    // Consider the silly mask `(111) /// 1`. What if user tries to delete the last placeholder
    // position? Something like `(589) /// `. We want to conform that to `(589`. Not `(589) /// `.
    // That's why the logic below finds the last filled placeholder character, and removes everything
    // from that point on.
    if (suppressGuide && isAddition === false) {
        var indexOfLastFilledPlaceholderChar = null;
        // Find the last filled placeholder position and substring from there
        for (var i = 0; i < conformedValue.length; i++) {
            if (placeholder[i] === exports.placeholderChar) {
                indexOfLastFilledPlaceholderChar = i;
            }
        }
        if (indexOfLastFilledPlaceholderChar !== null) {
            // We substring from the beginning until the position after the last filled placeholder char.
            conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
        }
        else {
            // If we couldn't find `indexOfLastFilledPlaceholderChar` that means the user deleted
            // the first character in the mask. So we return an empty string.
            conformedValue = emptyString;
        }
    }
    return { conformedValue: conformedValue, meta: { someCharsRejected: someCharsRejected } };
}
exports.conformToMask = conformToMask;
function convertMaskToPlaceholder(mask, placeholderChar) {
    if (mask === void 0) { mask = emptyArray; }
    if (placeholderChar === void 0) { placeholderChar = defaultPlaceholderChar; }
    if (!utils_1.isArray(mask)) {
        throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
    }
    if (mask.indexOf(placeholderChar) !== -1) {
        throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' +
            'that is not present in your mask as your placeholder character.\n\n' +
            ("The placeholder character that was received is: " + JSON.stringify(placeholderChar) + "\n\n") +
            ("The mask that was received is: " + JSON.stringify(mask)));
    }
    return mask.map(function (char) {
        return (char instanceof RegExp) ? placeholderChar : char;
    }).join('');
}
exports.convertMaskToPlaceholder = convertMaskToPlaceholder;
/**
 * Due to a bug on textmask, the requireDecimal its not working, so this function solves this problem
 * @param maskType
 * @param numberValue
 * @param decimalsFormat
 * @returns
 */
function formatNumber(maskType, numberValue, decimalsFormat) {
    if (decimalsFormat === void 0) { decimalsFormat = 2; }
    if (!numberValue && numberValue !== 0) {
        return '';
    }
    if (!numberValue.split) {
        numberValue += '';
        numberValue = numberValue.replace('.', ',');
    }
    var vals = numberValue.split(',');
    if (!maskType.textMask || typeof maskType.textMask !== 'function') {
        return '';
    }
    var mask = maskType.textMask(vals[0]);
    var decimals = '';
    if (decimalsFormat == undefined) {
        decimals = vals.length > 1 ? ',' + vals[1] : '';
    }
    else {
        decimals = vals.length > 1 ? (vals[1] < 10 ? vals[1].toString() + '0' : vals[1].toString()) : '00';
        if (decimals.length > decimalsFormat) {
            decimals = decimals.substring(0, decimalsFormat);
        }
    }
    var conformedValue = conformToMask(numberValue, mask, { guide: false }).conformedValue;
    var suffix = '';
    if (conformedValue.indexOf('%') >= 0) {
        conformedValue = conformedValue.replace('%', '');
        suffix = '%';
    }
    return conformedValue + (decimalsFormat > 0 ? ',' + decimals : '') + suffix;
}

},{"./inscricaoestadual":4,"./iptu":5,"./utils":12,"text-mask-addons/dist/createNumberMask":14}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLACAS_RANGE = [
    ['AAA0001', 'BEZ9999', 'PR', '02/1990'],
    ['BFA0001', 'GKI9999', 'SP', '10/1991'],
    ['GKJ0001', 'HOK9999', 'MG', '09/1991'],
    ['HOL0001', 'HQE9999', 'MA', '01/1992'],
    ['HQF0001', 'HTW9999', 'MS', '03/1992'],
    ['HTX0001', 'HZA9999', 'CE', '10/1992'],
    ['HZB0001', 'IAP9999', 'SE', '09/1993'],
    ['IAQ0001', 'JDO9999', 'RS', '03/1992'],
    ['JDP0001', 'JKR9999', 'DF', '04/1994'],
    ['JKS0001', 'JSZ9999', 'BA', '08/1993'],
    ['JTA0001', 'JWE9999', 'PA', '07/1993'],
    ['JWF0001', 'JXY9999', 'AM', '09/1993'],
    ['JXZ0001', 'KAU9999', 'MT', '09/1993'],
    ['KAV0001', 'KFC9999', 'GO', '05/1994'],
    ['KFD0001', 'KME9999', 'PE', '08/1994'],
    ['KMF0001', 'LVE9999', 'RJ', '05/1994'],
    ['LVF0001', 'LWQ9999', 'PI', '04/1996'],
    ['LWR0001', 'MMM9999', 'SC', '06/1996'],
    ['MMN0001', 'MOW9999', 'PB', '07/1996'],
    ['MOX0001', 'MTZ9999', 'ES', '12/1995'],
    ['MUA0001', 'MVK9999', 'AL', '08/1996'],
    ['MVL0001', 'MXG9999', 'TO', '11/1996'],
    ['MXH0001', 'MZM9999', 'RN', '06/1998'],
    ['MZN0001', 'NAG9999', 'AC', '06/1998'],
    ['NAH0001', 'NBA9999', 'RR', '07/1998'],
    ['NBB0001', 'NEH9999', 'RO', '07/1998'],
    ['NEI0001', 'NFB9999', 'AP', '09/1998'],
    ['NFC0001', 'NGZ9999', 'GO', '08/2003'],
    ['NHA0001', 'NHT9999', 'MA', '12/2006'],
    ['NHU0001', 'NIX9999', 'PI', '05/2007'],
    ['NIY0001', 'NJW9999', 'MT', '10/2007'],
    ['NJX0001', 'NLU9999', 'GO', '11/2007'],
    ['NLV0001', 'NMO9999', 'AL', '01/2008'],
    ['NMP0001', 'NNI9999', 'MA', '05/2008'],
    ['NNJ0001', 'NOH9999', 'RN', '07/2008'],
    ['NOI0001', 'NPB9999', 'AM', '07/2008'],
    ['NPC0001', 'NPQ9999', 'MT', '09/2008'],
    ['NPR0001', 'NQK9999', 'PB', '11/2008'],
    ['NQL0001', 'NRE9999', 'CE', '12/2008'],
    ['NRF0001', 'NSD9999', 'MS', '11/2009'],
    ['NSE0001', 'NTC9999', 'PA', '11/2009'],
    ['NTD0001', 'NTW9999', 'BA', '02/2010'],
    ['NTX0001', 'NUG9999', 'MT', '03/2010'],
    ['NUH0001', 'NUL9999', 'RR', '06/2010'],
    ['NUM0001', 'NVF9999', 'CE', '06/2010'],
    ['NVG0001', 'NVN9999', 'SE', '03/2010'],
    ['NVO0001', 'NWR9999', 'GO', '03/2010'],
    ['NWS0001', 'NXQ9999', 'MA', '07/2010'],
    ['NXR0001', 'NXT9999', 'AC', '05/2011'],
    ['NXU0001', 'NXW9999', 'PE', '07/2010'],
    ['NXX0001', 'NYG9999', 'MG', '10/2011'],
    ['NYH0001', 'NZZ9999', 'BA', '10/2010'],
    ['OAA0001', 'OAO9999', 'AM', '12/2010'],
    ['OAP0001', 'OBS9999', 'MT', '05/2011'],
    ['OBT0001', 'OCA9999', 'PA', '07/2011'],
    ['OCB0001', 'OCU9999', 'CE', '02/2011'],
    ['OCV0001', 'ODT9999', 'ES', '05/2011'],
    ['ODU0001', 'OEI9999', 'PI', '09/2011'],
    ['OEJ0001', 'OES9999', 'SE', '08/2011'],
    ['OET0001', 'OFH9999', 'PB', '04/2011'],
    ['OFI0001', 'OFW9999', 'PA', '03/2011'],
    ['OFX0001', 'OGG9999', 'PB', '06/2011'],
    ['OGH0001', 'OHA9999', 'GO', '04/2011'],
    ['OHB0001', 'OHK9999', 'AL', '09/2011'],
    ['OHL0001', 'OHW9999', 'RO', '11/2011'],
    ['OHX0001', 'OIQ9999', 'CE', '12/2011'],
    ['OIR0001', 'OJQ9999', 'MA', '01/2012'],
    ['OJR0001', 'OKC9999', 'RN', '04/2012'],
    ['OKD0001', 'OKH9999', 'SC', '02/2014'],
    ['OKI0001', 'OLG9999', 'BA', '10/2011'],
    ['OLH0001', 'OLN9999', 'TO', '02/2012'],
    ['OLO0001', 'OMH9999', 'MG', '03/2012'],
    ['OMI0001', 'OOF9999', 'GO', '04/2012'],
    ['OOG0001', 'OOU9999', 'MS', '02/2012'],
    ['OOV0001', 'ORC9999', 'MG', '06/2012'],
    ['ORD0001', 'ORM9999', 'AL', '01/2012'],
    ['ORN0001', 'OSV9999', 'CE', '07/2012'],
    ['OSW0001', 'OTZ9999', 'PA', '08/2012'],
    ['OUA0001', 'OUE9999', 'PI', '11/2012'],
    ['OUF0001', 'OVD9999', 'BA', '12/2012'],
    ['OVE0001', 'OVF9999', 'ES', '12/2012'],
    ['OVG0001', 'OVG9999', 'AC', '05/2013'],
    ['OVH0001', 'OVL9999', 'ES', '07/2013'],
    ['OVM0001', 'OVV9999', 'DF', '11/2013'],
    ['OVW0001', 'OVY9999', 'PI', '10/2013'],
    ['OVZ0001', 'OWG9999', 'RN', '06/2013'],
    ['OWH0001', 'OXK9999', 'MG', '10/2013'],
    ['OXL0001', 'OXL9999', 'RO', '11/2013'],
    ['OXM0001', 'OXM9999', 'AM', '11/2013'],
    ['OXN0001', 'OXN9999', 'AL', '11/2013'],
    ['OXO0001', 'OXO9999', 'PB', '11/2013'],
    ['OXP0001', 'OXP9999', 'AC', '12/2013'],
    ['OXQ0001', 'OXZ9999', 'MA', '04/2014'],
    ['OYA0001', 'OYC9999', 'TO', '11/2013'],
    ['OYD0001', 'OYK9999', 'ES', '12/2013'],
    ['OYL0001', 'OYZ9999', 'PE', '02/2014'],
    ['OZA0001', 'OZA9999', 'CE', '01/2014'],
    ['OZB0001', 'OZB9999', 'SE', '01/2014'],
    ['OZC0001', 'OZV9999', 'BA', '03/2014'],
    ['OZW0001', 'PBZ9999', 'DF', '05/2014'],
    ['PCA0001', 'PED9999', 'PE', '12/2014'],
    ['PEE0001', 'PFQ9999', 'PE', '09/2010'],
    ['PFR0001', 'PGK9999', 'PE', '07/2012'],
    ['PGL0001', 'PGU9999', 'PE', '10/2013'],
    ['PGV0001', 'PGZ9999', 'PE', '12/2014'],
    ['PHA0001', 'PHZ9999', 'AM', '06/2014'],
    ['PIA0001', 'PIZ9999', 'PI', '06/2014'],
    ['PJA0001', 'PLZ9999', 'BA', '10/2014'],
    ['PMA0001', 'POZ9999', 'CE', '06/2014'],
    ['PPA0001', 'PPZ9999', 'ES', '08/2014'],
    ['PQA0001', 'PRZ9999', 'GO', '03/2015'],
    ['PSA0001', 'PTZ9999', 'MA', '12/2014'],
    ['PUA0001', 'PZZ9999', 'MG', '05/2014'],
    ['QAA0001', 'QAZ9999', 'MS', '12/2014'],
    ['QBA0001', 'QCZ9999', 'MT', '05/2014'],
    ['QDA0001', 'QEZ9999', 'PA', '10/2014'],
    ['QFA0001', 'QFZ9999', 'PB', '05/2014'],
    ['QGA0001', 'QGZ9999', 'RN', '09/2014'],
    ['QHA0001', 'QJZ9999', 'SC', '05/2014'],
    ['QKA0001', 'QKM9999', 'TO', '11/2014'],
    ['QKN0001', 'QKZ9999', 'SE', '06/2014'],
    ['QLA0001', 'QLM9999', 'AL', '09/2015'],
    ['QLN0001', 'QLT9999', 'AP', '01/2015'],
    ['QLU0001', 'QLZ9999', 'AC', '08/2014'],
    ['QMA0001', 'QMP9999', 'SE', '03/2017'],
    ['QMQ0001', 'QQZ9999', 'MG', '07/2017'],
    ['QRA0001', 'QRA9999', 'RO', '11/2017'],
    ['QRB0001', 'QRZ9999', 'ES', '05/2018'],
    ['QSA0001', 'QSZ9999', 'PB', '04/2018'],
    ['QTA0001', 'QTB9999', 'RO', '08/2018'],
    ['QTC0001', 'RIN9999', 'BR', '00/0000'],
    ['RIO0001', 'RIO9999', 'RJ', '09/2018'],
    ['RLA0001', 'SAU9999', 'BR', '00/0000'],
    ['SAV0001', 'SAV9999', 'SP', '09/2009'],
];
exports.PLACAS_INVALID = { start: 'SAW0001', end: 'ZZZ9999' }; // || Sequências ainda não definidas
function validate_placa(placa, incluiMercosul) {
    var placaClean = placa.toString()
        .replace(/-/g, '')
        .replace(/ /g, '')
        .toUpperCase();
    var regex = {
        legadoBR: /^[A-Z]{3}[0-9]{4}$/,
        mercosulBR: /^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/,
        mercosulAR: /^[A-Z]{2}[0-9]{3}[A-Z]{2}$|^[A-Z]{1}[0-9]{3}[A-Z]{3}$/,
        mercosulBO: /^[A-Z]{2}[0-9]{5}$/,
        mercosulPY: /^[A-Z]{4}[0-9]{3}$|^[0-9]{3}[A-Z]{4}$/,
        mercosulUY: /^[A-Z]{3}[0-9]{4}$/,
    };
    var isLegadoBRInvalid = placaClean >= exports.PLACAS_INVALID.start && placaClean <= exports.PLACAS_INVALID.end;
    if ((regex.legadoBR.test(placaClean) && !isLegadoBRInvalid)
        || (regex.mercosulBR.test(placaClean))
        || (incluiMercosul && ((regex.mercosulAR.test(placaClean))
            || (regex.mercosulBO.test(placaClean))
            || (regex.mercosulPY.test(placaClean))
            || (regex.mercosulUY.test(placaClean))))) {
        return true;
    }
    return false;
}
exports.validate_placa = validate_placa;

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rg_sp(number) {
    // if(number.length>8){alert("Erro. Não existe RG SP\ncom mais de 8 dígitos.");}
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var cispDig = (b1 * 2 + b2 * 3 + b3 * 4 + b4 * 5 + b5 * 6 + b6 * 7 + b7 * 8 + b8 * 9) % 11;
    if (cispDig == 10) {
        cispDig = "X";
    }
    return cispDig;
}
exports.rg_sp = rg_sp;
function rg_rj(number) {
    // if(number.length>8){alert("Erro. Não existe RG-RJ/MaSP-MG\ncom mais de 8 dígitos.");}
    number = "0000000" + number;
    number = number.slice(number.length - 8);
    var b1 = parseInt(number.slice(7));
    var b2 = parseInt(number.slice(6, 7));
    var b3 = parseInt(number.slice(5, 6));
    var b4 = parseInt(number.slice(4, 5));
    var b5 = parseInt(number.slice(3, 4));
    var b6 = parseInt(number.slice(2, 3));
    var b7 = parseInt(number.slice(1, 2));
    var b8 = parseInt(number.slice(0, 1));
    var ci7 = b1 * 2;
    if (ci7 > 9) {
        ci7 = ci7 - 9;
    }
    var ci56 = b3 * 2;
    if (ci56 > 9) {
        ci56 = ci56 - 9;
    }
    var ci34 = b5 * 2;
    if (ci34 > 9) {
        ci34 = ci34 - 9;
    }
    var ci12 = b7 * 2;
    if (ci12 > 9) {
        ci12 = ci12 - 9;
    }
    var ci67 = b2;
    var ci45 = b4;
    var ci23 = b6;
    var ci01 = b8;
    var cirjDig = (ci7 + ci56 + ci34 + ci12 + ci67 + ci45 + ci23 + ci01) % 10;
    cirjDig = 10 - cirjDig;
    if (cirjDig == 10) {
        cirjDig = 0;
    }
    return cirjDig;
}
exports.rg_rj = rg_rj;
var RG = {
    sp: rg_sp,
    rj: rg_rj
};
exports.default = RG;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estados_1 = require("./estados");
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
exports.isPresent = isPresent;
function isArray(value) {
    return (Array.isArray && Array.isArray(value)) || value instanceof Array;
}
exports.isArray = isArray;
function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
exports.isString = isString;
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value); // && value.length === undefined
}
exports.isNumber = isNumber;
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
exports.isNil = isNil;
var strCaretTrap = '[]';
function processCaretTraps(mask) {
    var indexes = [];
    var indexOfCaretTrap;
    while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) { // eslint-disable-line
        indexes.push(indexOfCaretTrap);
        mask.splice(indexOfCaretTrap, 1);
    }
    return { maskWithoutCaretTraps: mask, indexes: indexes };
}
exports.processCaretTraps = processCaretTraps;
exports.modulo11 = function (value) {
    var mults = [];
    var weightVal = 2;
    for (var i = 0; i < value.length; i++) {
        // mults = [weightVal, ...mults]
        mults.push(weightVal);
        weightVal++;
        if (weightVal > 9)
            weightVal = 2;
    }
    mults = mults.reverse();
    var sum = 0;
    for (var i = 0; i < value.length; i++) {
        sum += parseInt(value[i]) * mults[i];
    }
    var digit = (sum * 10) % 11;
    return digit;
};
exports.modulo11Custom = function (string, size, maxMult, by10) {
    if (maxMult === void 0) { maxMult = string.length; }
    if (by10 === void 0) { by10 = true; }
    if (!by10)
        size = 1;
    for (var n = 1; n <= size; n++) {
        var soma = 0;
        var mult = 2;
        for (var i = string.length - 1; i >= 0; i--) {
            soma += (mult * parseInt(string.charAt(i)));
            mult++;
            if (mult > maxMult)
                mult = 2;
        }
        var dig = void 0;
        if (by10) {
            dig = ((soma * 10) % 11) % 10;
        }
        else {
            dig = soma % 11;
            if (dig == 10)
                dig = 0;
        }
        string += dig;
    }
    return string.substr(string.length - size, size);
};
exports.modulo11a = function (string, size, mod) {
    var soma = 0;
    for (var i = 1; i <= size; i++) {
        // tslint:disable-next-line:radix
        soma = soma + parseInt(string.substring(i - 1, i)) * (mod - i);
    }
    var resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }
    return resto;
};
/**
 *
 * @param input
 * ^ - Match line start
  (\d) - match first digit and capture it in back reference #1 i.e. \1
  (?!..) is a negative lookahead
  (?!\1+$) means disallow the match if first digit is followed by same digit (captured group) till end.
  \d{11}$ match next 11 digit followed by line end
 */
function allNumbersAreSame(inputValue) {
    var input = getAllDigits(inputValue);
    if (typeof input === 'string') {
        var reg = new RegExp('^(\\d)(?!\\1+$)\\d{' + (input.length - 1) + '}$');
        return reg.test(input);
    }
    return false;
}
exports.allNumbersAreSame = allNumbersAreSame;
function getAllDigits(input) {
    if (!input.match) {
        input = input.toString();
    }
    var match = input.match(/\d/g);
    if (match) {
        return match.join("");
    }
    return '';
}
exports.getAllDigits = getAllDigits;
function getAllWords(input) {
    var match = input.match(/\w/g);
    if (match) {
        return match.join("");
    }
    return '';
}
exports.getAllWords = getAllWords;
function currencyToNumber(input) {
    if (typeof input === 'number') {
        return input;
    }
    input = input.replace(/ /g, '');
    if (input.indexOf('$') !== -1) {
        var vals = input.split('$');
        input = vals[1];
    }
    // Keeping just numbers . and ,
    input = input.replace(/[^0-9.,]+/, '');
    // eua format
    if (input.indexOf('.') === (input.length - 1) - 2) {
        input = input.replace(/\,/g, '');
    }
    // br format
    else {
        input = input.replace(/\./g, '').replace(',', '.');
    }
    return parseFloat(input);
}
exports.currencyToNumber = currencyToNumber;
function numberToCurrency(value) {
    return ' R$ ' + value.toFixed(2).replace('.', ',') + ' ';
}
exports.numberToCurrency = numberToCurrency;
;
function slugify(value) {
    return value.toString().toLowerCase()
        .replace(/[àÀáÁâÂãäÄÅåª]+/g, 'a') // Special Characters #1
        .replace(/[èÈéÉêÊëË]+/g, 'e') // Special Characters #2
        .replace(/[ìÌíÍîÎïÏ]+/g, 'i') // Special Characters #3
        .replace(/[òÒóÓôÔõÕöÖº]+/g, 'o') // Special Characters #4
        .replace(/[ùÙúÚûÛüÜ]+/g, 'u') // Special Characters #5
        .replace(/[ýÝÿŸ]+/g, 'y') // Special Characters #6
        .replace(/[ñÑ]+/g, 'n') // Special Characters #7
        .replace(/[çÇ]+/g, 'c') // Special Characters #8
        .replace(/[ß]+/g, 'ss') // Special Characters #9
        .replace(/[Ææ]+/g, 'ae') // Special Characters #10
        .replace(/[Øøœ]+/g, 'oe') // Special Characters #11
        .replace(/[%]+/g, 'pct') // Special Characters #12
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
exports.slugify = slugify;
;
/**
 *
 * @param string  ex. 12345
 * @param size   11
 * @param fill   0
 *
 * Returns: 00000012345
 */
function fillString(string, size, fill) {
    if (string.length < size) {
        var dif = size - string.length;
        for (var i = 0; i < dif; i++) {
            string = fill + string;
        }
    }
    return string;
}
exports.fillString = fillString;
function randArray(array) {
    var index = randomNumber(0, array.length);
    return array[index];
}
exports.randArray = randArray;
function rand(length) {
    var ranges = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ranges[_i - 1] = arguments[_i];
    }
    var str = ""; // the string (initialized to "")
    while (length--) { // repeat this length of times
        var ind = Math.floor(Math.random() * ranges.length); // get a random range from the ranges object
        var min = ranges[ind][0].charCodeAt(0), // get the minimum char code allowed for this range
        max = ranges[ind][1].charCodeAt(0); // get the maximum char code allowed for this range
        var c = Math.floor(Math.random() * (max - min + 1)) + min; // get a random char code between min and max
        str += String.fromCharCode(c); // convert it back into a character and append it to the string str
    }
    return str; // return str
}
exports.rand = rand;
function randomNumber(begin, end) {
    var dif = end - begin;
    var number = Math.floor(Math.random() * dif) + begin;
    return number;
}
exports.randomNumber = randomNumber;
function randomLetter(size, onlyCapitals) {
    if (size === void 0) { size = 1; }
    if (onlyCapitals === void 0) { onlyCapitals = false; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (onlyCapitals == false) {
        possible += "abcdefghijklmnopqrstuvwxyz";
    }
    possible = possible.split('');
    for (var i = 0; i < size; i++) {
        var pos = Math.floor(Math.random() * possible.length);
        text += possible[pos];
    }
    return text;
}
exports.randomLetter = randomLetter;
function randomLetterOrNumber(size, onlyCapitals) {
    if (size === void 0) { size = 1; }
    if (onlyCapitals === void 0) { onlyCapitals = false; }
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (onlyCapitals == false) {
        possible += "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    possible = possible.split('');
    for (var i = 0; i < size; i++) {
        var pos = Math.floor(Math.random() * possible.length);
        text += possible[pos];
    }
    return text;
}
exports.randomLetterOrNumber = randomLetterOrNumber;
exports.randomEstadoSigla = function () {
    var total = estados_1.ESTADOS_SIGLA.length;
    return estados_1.ESTADOS_SIGLA[Math.floor(Math.random() * total)];
};
exports.CORES = ["AMARELO", "AZUL", "BEGE", "BRANCA", "CINZA", "DOURADA", "GRENA", "LARANJA", "MARROM", "PRATA",
    "PRETA", "ROSA", "ROXA", "VERDE", "VERMELHA", "FANTASIA"];
function getSpecialProperty(model, key) {
    return model[key];
}
exports.getSpecialProperty = getSpecialProperty;
/**
 *
 */
exports.makeGenericFaker = function (val, options) {
    if (options === void 0) { options = null; }
    return function () {
        if (!val.textMask || !val.textMask.map) {
            return '';
        }
        var newData = val.textMask.map(function (c, index) {
            if (options && options[index]) {
                return options[index]();
            }
            c = c.toString();
            if (c === /\d/.toString()) {
                return Math.floor(Math.random() * 10).toString();
            }
            else if (c === /[A-Za-z]/.toString()) {
                return randomLetter(1).toString();
            }
            else if (c === /\w/.toString()) {
                return randomLetterOrNumber(1).toString();
            }
            else if (c.indexOf('/[') === 0) { // /[1-9]/ ou /[5-9]/
                c = c.replace('/[', '').replace(']/', '');
                if (c.indexOf('-') > 0) {
                    c = c.split('-');
                    if (parseInt(c[1])) {
                        var mult = c[1] - c[0];
                        var plus = parseInt(c[0]);
                        return (Math.floor(Math.random() * mult) + plus).toString();
                    }
                    else {
                        return rand(1, [c[0], c[1]]);
                    }
                }
                else if (c.indexOf('|') > 0) {
                    c = c.split('|');
                    var index_1 = Math.floor(Math.random() * c.length);
                    return c[index_1];
                }
            }
            else {
                return c;
            }
        });
        return newData.join('');
    };
};
var utilsBr = {
    isPresent: isPresent,
    isArray: isArray,
    isString: isString,
    isNumber: isNumber,
    isNil: isNil,
    processCaretTraps: processCaretTraps,
    allNumbersAreSame: allNumbersAreSame,
    getAllDigits: getAllDigits,
    getAllWords: getAllWords,
    currencyToNumber: currencyToNumber,
    numberToCurrency: numberToCurrency,
    slugify: slugify,
    fillString: fillString,
    randArray: randArray,
    rand: rand,
    randomNumber: randomNumber,
    randomLetter: randomLetter,
    randomLetterOrNumber: randomLetterOrNumber,
    getSpecialProperty: getSpecialProperty
};
exports.default = utilsBr;

},{"./estados":2}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var inscricaoestadual_1 = require("./inscricaoestadual");
var placa_1 = require("./placa");
var create_1 = require("./create");
var rg_1 = require("./rg");
var iptu_1 = require("./iptu");
var estados_1 = require("./estados");
function validate_aih(aih) {
    var aihClean = aih.replace(/[^\d]+/g, '');
    var dvOriginal = aihClean.substr(-1);
    var dv = create_1.create_aih(aihClean);
    return dvOriginal === dv;
}
exports.validate_aih = validate_aih;
function validate_celular(cel) {
    var celClean = cel.replace(/[^\d]+/g, '');
    celClean = celClean.replace(/_/g, '');
    if (celClean.length !== 11) {
        return false;
    }
    if (celClean[0] == 0 || celClean[2] < 5) {
        return false;
    }
    return true;
}
exports.validate_celular = validate_celular;
exports.CEPRange = {
    'SP': /^([1][0-9]{3}|[01][0-9]{4})[0-9]{3}$/g,
    'RJ': /^[2][0-8][0-9]{3}[0-9]{3}$/g,
    'MS': /^[7][9][0-9]{3}[0-9]{3}$/g,
    'MG': /^[3][0-9]{4}[0-9]{3}$/g,
    'MT': /^[7][8][8][0-9]{2}[0-9]{3}$/g,
    'AC': /^[6][9]{2}[0-9]{2}[0-9]{3}$/g,
    'AL': /^[5][7][0-9]{3}[0-9]{3}$/g,
    'AM': /^[6][9][0-8][0-9]{2}[0-9]{3}$/g,
    'AP': /^[6][89][9][0-9]{2}[0-9]{3}$/g,
    'BA': /^[4][0-8][0-9]{3}[0-9]{3}$/g,
    'CE': /^[6][0-3][0-9]{3}[0-9]{3}$/g,
    'DF': /^[7][0-3][0-6][0-9]{2}[0-9]{3}$/g,
    'ES': /^[2][9][0-9]{3}[0-9]{3}$/g,
    'GO': /^[7][3-6][7-9][0-9]{2}[0-9]{3}$/g,
    'MA': /^[6][5][0-9]{3}[0-9]{3}$/g,
    'PA': /^[6][6-8][0-8][0-9]{2}[0-9]{3}$/g,
    'PB': /^[5][8][0-9]{3}[0-9]{3}$/g,
    'PE': /^[5][0-6][0-9]{2}[0-9]{3}$/g,
    'PI': /^[6][4][0-9]{3}[0-9]{3}$/g,
    'PR': /^[8][0-7][0-9]{3}[0-9]{3}$/g,
    'RN': /^[5][9][0-9]{3}[0-9]{3}$/g,
    'RO': /^[7][8][9][0-9]{2}[0-9]{3}$/g,
    'RR': /^[6][9][3][0-9]{2}[0-9]{3}$/g,
    'RS': /^[9][0-9]{4}[0-9]{3}$/g,
    'SC': /^[8][89][0-9]{3}[0-9]{3}$/g,
    'SE': /^[4][9][0-9]{3}[0-9]{3}$/g,
    'TO': /^[7][7][0-9]{3}[0-9]{3}$/g,
};
function validate_cep(cep) {
    var cepClean = cep.replace(/[^\d]+/g, '');
    var exp = /\d{2}\.\d{3}\-\d{3}/;
    if (!exp.test(cep) && cepClean.length !== 8) {
        return false;
    }
    return true;
}
exports.validate_cep = validate_cep;
function cep_ranges(cep) {
    cep = (cep.toString()).replace(/[^\d]+/g, '');
    cep = parseInt(cep, 10);
    var cepString = cep.toString();
    var found;
    for (var estado in exports.CEPRange) {
        var v = exports.CEPRange[estado];
        var r = new RegExp(v).test(cepString);
        if (r) {
            found = r;
            return true;
        }
    }
    if (!found) {
        return false;
    }
    return true;
}
exports.cep_ranges = cep_ranges;
function validate_certidao(value) {
    var certidao = utils_1.getAllDigits(value);
    var format = /[0-9]{32}/;
    if (!format.test(certidao)) {
        return false;
    }
    var dvOriginal = certidao.substr(-2);
    var dv = create_1.create_certidao(certidao);
    return dv === dvOriginal;
}
exports.validate_certidao = validate_certidao;
/**
 *
 * @param chassi
 */
function validate_chassi(chassi) {
    // 1 - Possuir o número "0" (ZERO) como 1º dígito.
    var zeroNoPrimeiroDigito = /^0/;
    if (zeroNoPrimeiroDigito.test(chassi)) {
        return false;
    }
    // 2 - Possuir espaço no chassi
    chassi = utils_1.getAllWords(chassi); // espacoNoChassi
    // 3 - Se, a partir do 4º dígito, houver uma repetição consecutiva, por mais de seis vezes, do mesmo dígito 
    // (alfabético ou numérico). Exemplos: 9BW11111119452687 e 9BWZZZ5268AAAAAAA.
    var repeticaoMaisDe6Vezes = /^.{4,}([0-9A-Z])\1{5,}/;
    if (repeticaoMaisDe6Vezes.test(chassi)) {
        return false;
    }
    // 4 - Apresente os caracteres "i", "I", "o", "O", "q", "Q".
    var caracteresiIoOqQ = /[iIoOqQ]/;
    if (caracteresiIoOqQ.test(chassi)) {
        return false;
    }
    // 5 - Os quatro últimos caracteres devem ser obrigatoriamente numéricos
    var ultimos4Numericos = /[0-9]{4}$/;
    if (!ultimos4Numericos.test(chassi)) {
        return false;
    }
    // 6 - Se possuir número de dígitos diferente de 17 (alfanuméricos). 
    if (chassi.length > 17) {
        return false;
    }
    return true;
}
exports.validate_chassi = validate_chassi;
function validate_cnae(number) {
    if (!number)
        return true;
    return false;
}
/**
 *
 * II - Número do Espelho da CNH - segundo número de identificação nacional,
 * que será formado por 9 (nove) caracteres mais 1 (um) dígito verificador de segurança,
 * autorizado e controlado pelo DENATRAN, e identificará cada espelho de CNH expedida.
 * https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-denatran/resolucoes-contran
 * https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao5112014.pdf
 * 598: https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao59820162.pdf
 * @param value
 */
function validate_cnhespelho(value) {
    value = value.replace(/[^\d]/g, '');
    if (value.length !== 10) {
        return false;
    }
    var check = create_1.create_cnhespelho(value);
    if (check === '0' || check === '1')
        check = '0';
    return value.substr(-1) == check;
}
exports.validate_cnhespelho = validate_cnhespelho;
/**
 *
 * III – Número do formulário RENACH - número de identificação
* estadual, documento de coleta de dados do candidato/condutor gerado a cada serviço,
* composto, obrigatoriamente, por 11 (onze) caracteres, sendo as duas primeiras
* posições formadas pela sigla da Unidade de Federação expedidora, facultada a
* utilização da última posição como dígito verificador de segurança.
*  a) O número do formulário RENACH identificará a Unidade da
* Federação onde o condutor foi habilitado ou realizou alterações de dados no seu
* cadastro pela última vez.
*  b) O Formulário RENACH que dá origem às informações na
* BINCO e autorização para a impressão da CNH deverá ficar arquivado em seg
* 598 - https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao59820162.pdf
* 718 - https://www.gov.br/infraestrutura/pt-br/assuntos/transito/conteudo-contran/resolucoes/resolucao7182017.pdf
* @param value
 */
function validate_renachestadual(value) {
    var state = value.substr(0, 2).toLowerCase();
    if (!estados_1.ESTADOS_SIGLA.includes(state)) {
        return false;
    }
    var digits = value.substr(2);
    digits = digits.replace(/[^\d]/g, '');
    if (digits.length !== 9) {
        return false;
    }
    var check = create_1.create_renachestadual(value);
    if (check === '0' || check === '1')
        check = '0';
    return value.substr(-1) == check;
}
exports.validate_renachestadual = validate_renachestadual;
function validate_renachseguranca(value) {
    value = value.replace(/[^\d]/g, '');
    if (value.length !== 11) {
        return false;
    }
    var check = create_1.create_renachseguranca(value);
    return value.substr(-1) == check;
}
exports.validate_renachseguranca = validate_renachseguranca;
/**
 * BINCO
 * I – o primeiro número de identificação nacional – Registro Nacional,
 * será gerado pelo sistema informatizado da Base Índice Nacional de Condutores –
 * BINCO, composto de 9 (nove) caracteres mais 2 (dois) dígitos verificadores de
 * segurança, sendo único para cada condutor e o acompanhará durante toda a
 * sua existência como condutor, não sendo permitida a sua reutilização para
 * outro condutor.
 * @param value
 * @returns
 */
function validate_cnh(value) {
    value = value.toString().replace(/[^\d]/g, '');
    if (value.length !== 11) {
        return false;
    }
    var check = create_1.create_cnh(value);
    return value.substr(-2) == check;
}
exports.validate_cnh = validate_cnh;
function validate_cnpj(cnpj) {
    // Valida se tem apenas número, - ou .
    var precisaFicarVazio = cnpj.replace(/^[0-9./-]*$/gm, '');
    if (precisaFicarVazio != '')
        return false;
    cnpj = cnpj.replace(/[^\d]+/g, '');
    var tamanho = cnpj.length - 2;
    var digitos = cnpj.substring(tamanho);
    var resultados = create_1.create_cnpj(cnpj);
    if (!resultados ||
        resultados[0] !== parseInt(digitos.charAt(0), 10) ||
        resultados[1] !== parseInt(digitos.charAt(1), 10)) {
        return false;
    }
    return true;
}
exports.validate_cnpj = validate_cnpj;
function validate_contabanco(number) {
    if (!number)
        return false;
    return true;
}
/**
 * Referencia: http://www.receita.fazenda.gov.br/aplicacoes/atcta/funcoes.js
 * @param strCPF
 * @returns
 */
function validate_cpf(strCPF) {
    // Valida se tem apenas número, - ou .
    var precisaFicarVazio = strCPF.replace(/^[0-9.-]*$/gm, '');
    if (precisaFicarVazio != '')
        return false;
    strCPF = strCPF.replace(/[^\d]+/g, '');
    if (strCPF.length !== 11) {
        return false;
    }
    //verifica se todos os numeros sao iguais
    var expIguais = /^(?!.*(\d)\1{10}).*$/;
    if (!strCPF.match(expIguais)) {
        return false;
    }
    // valida digito verificados
    var restos = create_1.create_cpf(strCPF);
    if (!restos || restos != strCPF.substr(-2)) {
        return false;
    }
    return true;
}
exports.validate_cpf = validate_cpf;
function validate_cpfcnpj(number) {
    return validate_cpf(number) || validate_cnpj(number);
}
function validate_cns(value) {
    var cns = utils_1.getAllDigits(value);
    var definitivo = /[1-2][0-9]{10}00[0-1][0-9]/; // começam com 1 ou 2
    var provisorio = /[7-9][0-9]{14}/; // começam com 7,8 ou 9
    if (!definitivo.test(cns) && !provisorio.test(cns)) {
        return false;
    }
    var soma = 0;
    for (var i = 0; i < cns.length; i++) {
        soma += parseInt(cns[i]) * (15 - i);
    }
    return soma % 11 == 0;
}
exports.validate_cns = validate_cns;
function validate_cartaocredito(input) {
    var value;
    if (typeof input == 'string') {
        value = utils_1.getAllDigits(input);
    }
    else {
        value = input.toString();
    }
    var number = value.slice(0, 16);
    var mes = parseInt(value.slice(16, 18));
    var ano = parseInt(value.slice(18, 20));
    var cvv = value.slice(20, 23);
    var d = new Date();
    var anoAtual = (d.getFullYear() - 2000);
    if (ano && ano < anoAtual) {
        return false;
    }
    if (mes && mes < d.getMonth() + 1 && ano === anoAtual) {
        return false;
    }
    if (cvv) {
        var validcvv = validate_cvv(cvv);
        if (validcvv.isValid === false) {
            return false;
        }
    }
    var found;
    Object.keys(exports.creditCardValidator).forEach(function (key) {
        if (exports.creditCardValidator[key].test(number)) {
            found = key;
        }
    });
    return !!found;
}
exports.validate_cartaocredito = validate_cartaocredito;
function validate_cvv(value, maxLength) {
    if (maxLength === void 0) { maxLength = 3; }
    maxLength = maxLength instanceof Array ? maxLength : [maxLength];
    if (typeof value !== 'string') {
        return { isValid: false, isPotentiallyValid: false };
    }
    if (!/^\d*$/.test(value)) {
        return { isValid: false, isPotentiallyValid: false };
    }
    var i = 0;
    var max = value.length;
    for (; i < maxLength.length; i++) {
        if (max === maxLength[i]) {
            return { isValid: true, isPotentiallyValid: true };
        }
    }
    if (value.length < Math.min.apply(null, maxLength)) {
        return { isValid: false, isPotentiallyValid: true };
    }
    var maximum = maxLength;
    var i = 0;
    for (; i < maxLength.length; i++) {
        maximum = maxLength[i] > maximum ? maxLength[i] : maximum;
    }
    if (value.length > maximum) {
        return { isValid: false, isPotentiallyValid: false };
    }
    return { isValid: true, isPotentiallyValid: true };
}
/**
 *     A hash of valid CC abbreviations and regular expressions
    mc: Mastercard
    ec: Eurocard
    vi: Visa
    ax: American Express
    dc: Diners Club
    bl: Carte Blanch
    di: Discover
    jcb: JCB
    er: Enroute
*/
exports.creditCardValidator = {
    'mc': /5[1-5][0-9]{14}/,
    'ec': /5[1-5][0-9]{14}/,
    'vi': /4(?:[0-9]{12}|[0-9]{15})/,
    'ax': /3[47][0-9]{13}/,
    'dc': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
    'bl': /3(?:0[0-5][0-9]{11}|[68][0-9]{12})/,
    'di': /6011[0-9]{12}/,
    'jcb': /(?:3[0-9]{15}|(2131|1800)[0-9]{11})/,
    'er': /2(?:014|149)[0-9]{11}/
};
function validate_currency(currency) {
    if (typeof currency === 'number') {
        return true;
    }
    var regex = /^(R\$|R\$ )?(-)?(?!0(\.)?00)\d{1,3}((\.)?\d{3})*(,\d\d)?$/g;
    return regex.test(currency);
}
exports.validate_currency = validate_currency;
function validate_data(value) {
    if (!value) {
        return false;
    }
    var values = value.split('/');
    if (values.length !== 3) {
        return false;
    }
    var testData = new Date(values[1] + '/' + values[0] + '/' + values[2]);
    if (!testData.getTime()) {
        return false;
    }
    // if (parseInt(values[0]) > 31 || parseInt(values[1]) > 12 || parseInt(values[2]) < 1000) return false;
    return true;
}
function validate_date(value) {
    if (!value || value.length < 10) {
        return false;
    }
    var testData = new Date(value);
    if (!testData.getTime()) {
        return false;
    }
    return true;
}
function validate_datetime(time, options) {
    if (options === void 0) { options = {}; }
    if (!time) {
        return false;
    }
    time = time.toString();
    var values = time.split(' ');
    if (validate_date(values[0]) && validate_time(values[1], options)) {
        return true;
    }
    return false;
}
exports.validate_datetime = validate_datetime;
function validate_datahora(time, options) {
    if (options === void 0) { options = {}; }
    if (!time) {
        return false;
    }
    time = time.toString();
    var values = time.split(' ');
    if (validate_data(values[0]) && validate_time(values[1], options)) {
        return true;
    }
    return false;
}
exports.validate_datahora = validate_datahora;
function validate_ect(number) {
    number = utils_1.getAllDigits(number);
    if (number.length > 9) {
        return false;
    }
    var nodigit = number.substr(0, number.length - 1);
    var dg = create_1.create_ect(nodigit);
    if (parseInt(number[number.length - 1]) === dg) {
        return true;
    }
    return false;
}
exports.validate_ect = validate_ect;
function validate_email(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
function validate_endereco(number) {
    if (!number)
        return false;
    return true;
}
function validate_number(number) {
    if (number.split(',').length > 2) {
        return false;
    }
    var regexDecimal = /^\d+(?:\.\d{0,2})$/;
    var regex = /^[0-9]{0,10}[,]{1,1}[0-9]{0,4}/;
    var regexNumero = /^[0-9]{0,10}/;
    return regexDecimal.test(number) || regex.test(number) || regexNumero.test(number);
}
exports.validate_number = validate_number;
function validate_porcentagem(porcentagem) {
    porcentagem = porcentagem.split('%')[0];
    return validate_number(porcentagem);
}
exports.validate_porcentagem = validate_porcentagem;
function validate_processo(processo) {
    var processoClean = processo.replace(/\./g, '');
    processoClean = processoClean.replace(/\-/g, '');
    // const exp = /\d{7}\-\d{2}\.\d{4}\.\w{3}\.\d{4}/;
    // const expClean = /\d{13}\w{3}\d{4}/;
    // if (!exp.test(processo) && !expClean.test(processoClean)) {
    //   return false;
    // }
    var processoValidado = create_1.create_processo(processo);
    if (parseInt(processoClean) !== parseInt(utils_1.getAllDigits(processoValidado))) {
        return false;
    }
    return true;
}
exports.validate_processo = validate_processo;
function validate_pispasep(number) {
    number = utils_1.getAllDigits(number);
    var nis = utils_1.fillString(number, 11, '0');
    var regex = /\d{11}/; // /^\d{3}\.\d{5}\.\d{2}\-\d{1}$/;
    if (!regex.test(nis)) {
        return false;
    }
    var digit = create_1.create_pispasep(number);
    return nis[10].toString() == digit.toString();
}
exports.validate_pispasep = validate_pispasep;
function validate_renavam(renavam) {
    var renavamClean = renavam.replace(/\./g, '');
    renavamClean = renavamClean.replace(/\-/g, '');
    var dv = create_1.create_renavam(renavam);
    var tam = renavam.length;
    var digitos = renavam.substr(tam - 1, 1);
    if (digitos.charCodeAt(0) - 48 === dv) {
        return true;
    }
    else {
        return false;
    }
}
exports.validate_renavam = validate_renavam;
function validate_rg(rg) {
    var rgClean = rg.replace(/\./g, '');
    rgClean = rgClean.replace(/-/g, '');
    var exp = /[a-z]{2}\-\d{2}\.\d{3}\.\d{3}/;
    var expClean = /[a-z]{2}\d{8}/;
    var state = rg.substr(0, 2).toUpperCase();
    if (!exp.test(rg) && !expClean.test(rgClean) && !(state in exports.CEPRange)) {
        return false;
    }
    var validateState = rg_1.default[state];
    if (validateState) {
        return validateState(rg);
    }
    return true;
}
exports.validate_rg = validate_rg;
function validate_senha(value, options) {
    if (options === void 0) { options = {}; }
    var finalregex = '^';
    //   ^	The password string will start this way
    // (?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
    if (options.lowercase !== false) {
        finalregex = finalregex + '(?=.*[a-z])';
    }
    // (?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
    if (options.uppercase !== false) {
        finalregex = finalregex + '(?=.*[A-Z])';
    }
    // (?=.*[0-9])	The string must contain at least 1 numeric character
    if (options.numeric !== false) {
        finalregex = finalregex + '(?=.*[0-9])';
    }
    // (?=.*[!@#\$%\^&\*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
    if (options.numeric !== false) {
        finalregex = finalregex + '(?=.*[!@#\\$%\\^&\\*])';
    }
    // (?=.{8,})	The string must be eight characters or longer
    if (!options.size) {
        options.size = 8;
    }
    finalregex = finalregex + ("(?=.{" + options.size + ",})");
    var regex = new RegExp(finalregex);
    return regex.test(value);
}
function validate_site(value) {
    var re = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&=]*)/g;
    return re.test(String(value).toLowerCase());
}
function validate_sped(sped) {
    if (!sped)
        return false;
    return true;
}
exports.validate_sped = validate_sped;
function validate_telefone(tel) {
    var telClean = tel.replace(/[^\d]+/g, '');
    tel = tel.replace(/_/g, '');
    if (!(telClean.length === 10 || telClean.length === 11)) {
        return false;
    }
    if (telClean[0] == 0 || telClean[2] == 0) {
        return false;
    }
    return true;
}
exports.validate_telefone = validate_telefone;
function validate_time(time, options) {
    if (options === void 0) { options = {}; }
    var value = time.toString();
    if (options.diario) {
        var expression = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
        return expression.test(value);
    }
    else {
        var expression = /^([0-9]?[0-9]):([0-5][0-9])(:[0-5][0-9])?$/;
        return expression.test(value);
    }
}
exports.validate_time = validate_time;
function validate_titulo(titulo) {
    if (!titulo) {
        return false;
    }
    var tituloClean = titulo.replace(/\./g, '');
    var exp = /\d{4}\.\d{4}\.\d{4}/;
    var expClean = /\d{4}\d{4}\d{4}/;
    if (!exp.test(tituloClean) && !expClean.test(tituloClean)) {
        return false;
    }
    var tam = tituloClean.length;
    var dig;
    try {
        dig = create_1.create_titulo_atual(tituloClean);
        // const noDv = tituloClean.substr(0, tam - 2);
        // dig = create_titulo(noDv);
    }
    catch (e) {
        return false;
    }
    var digitos = tituloClean.substr(tam - 2, 2);
    if (digitos === dig) {
        return true;
    }
    else {
        return false;
    }
}
exports.validate_titulo = validate_titulo;
function validate_username(value) {
    var re = /^[a-z0-9_-]{3,16}$/igm;
    return re.test(String(value).toLowerCase());
}
exports.validateBr = {
    aih: validate_aih,
    cartaocredito: validate_cartaocredito,
    celular: validate_celular,
    cep: validate_cep,
    certidao: validate_certidao,
    chassi: validate_chassi,
    cnae: validate_cnae,
    cnh: validate_cnh,
    cnhespelho: validate_cnhespelho,
    renachestadual: validate_renachestadual,
    renachseguranca: validate_renachseguranca,
    cnpj: validate_cnpj,
    cns: validate_cns,
    contabanco: validate_contabanco,
    cpf: validate_cpf,
    cpfcnpj: validate_cpfcnpj,
    currency: validate_currency,
    data: validate_data,
    date: validate_date,
    datetime: validate_datetime,
    datahora: validate_datahora,
    ect: validate_ect,
    email: validate_email,
    endereco: validate_endereco,
    inscricaoestadual: inscricaoestadual_1.validate_inscricaoestadual,
    iptu: iptu_1.validate_iptu,
    number: validate_number,
    porcentagem: validate_porcentagem,
    pispasep: validate_pispasep,
    placa: placa_1.validate_placa,
    processo: validate_processo,
    renavam: validate_renavam,
    rg: validate_rg,
    senha: validate_senha,
    site: validate_site,
    sped: validate_sped,
    telefone: validate_telefone,
    time: validate_time,
    titulo: validate_titulo,
    username: validate_username
};

},{"./create":1,"./estados":2,"./inscricaoestadual":4,"./iptu":5,"./placa":10,"./rg":11,"./utils":12}],14:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});
},{}]},{},[3])(3)
});
