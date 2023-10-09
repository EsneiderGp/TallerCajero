let login_form = document.getElementById('login_form');
let registro_form = document.getElementById('registro_form');
let consul_form = document.getElementById('consul_form');
let reti_form = document.getElementById('reti_form');
let consig_form = document.getElementById('consig_form');
let transfer_form = document.getElementById('transfer_form');
let close_form = document.getElementById('close_form');
let img_logo = document.getElementById('logo');

var Usuarios = []
var Contrasenas = []
var saldos = []
var Cuentas = []

function Registrarse() {
    alert('registrar');
    var usuario = document.getElementById("new_user").value;
    var contrasena = document.getElementById("new_pass").value;
    var saldo = document.getElementById("new_saldo").value;
    var cuenta = document.getElementById("new_cuenta").value;
    if (saldo>=100000){
        
        if (usuario == "" || contrasena == "") {
            alert("Faltan datos");
        } else {
            Usuarios.push(usuario)
            Contrasenas.push(contrasena);
            saldos.push(saldo);
            Cuentas.push(cuenta);
            Usuarios[Usuarios.length] = usuario;
            Contrasenas[Contrasenas.length] = contrasena;
        }
        alert(Usuarios[0]);
    }else(alert('MONTO INSUFICIENTE PARA ABRIR CUENTA '))
    
}
    for (var i = 0; i < Usuarios.length; i++) {
    console.log(Usuarios[i]);
}




function IniciarSesion() {
    login_form.style.display = 'flex'
    registro_form.style.display = 'none'
    consul_form.style.display = 'none'
    reti_form.style.display = 'none'
    consig_form.style.display = 'none'
    transfer_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function Abrircuenta() {
    registro_form.style.display = 'flex'
    login_form.style.display = 'none'
    consul_form.style.display = 'none'
    reti_form.style.display = 'none'
    consig_form.style.display = 'none'
    transfer_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function consultarSaldo() {
    consul_form.style.display = 'flex'
    registro_form.style.display = 'none'
    login_form.style.display = 'none'
    reti_form.style.display = 'none'
    consig_form.style.display = 'none'
    transfer_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function retirarDinero() {
    reti_form.style.display = 'flex'
    registro_form.style.display = 'none'
    consul_form.style.display = 'none'
    login_form.style.display = 'none'
    consig_form.style.display = 'none'
    transfer_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function transferirDinero() {
    transfer_form.style.display = 'flex'
    registro_form.style.display = 'none'
    consul_form.style.display = 'none'
    reti_form.style.display = 'none'
    consig_form.style.display = 'none'
    login_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function depositarDinero() {
    consig_form.style.display = 'flex'
    registro_form.style.display = 'none'
    consul_form.style.display = 'none'
    reti_form.style.display = 'none'
    transfer_form.style.display = 'none'
    login_form.style.display = 'none'
    close_form.style.display = 'none'
    img_logo.style.width = '100px'
}
function cerrarSesion() {
    close_form.style.display = 'flex'
    registro_form.style.display = 'none'
    consul_form.style.display = 'none'
    reti_form.style.display = 'none'
    consig_form.style.display = 'none'
    transfer_form.style.display = 'none'
    login_form.style.display = 'none'
    img_logo.style.width = '100px'
}

