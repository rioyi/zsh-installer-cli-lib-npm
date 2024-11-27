# How to USO zsh-installer-cli ;)
---

## `zsh-installer-cli`

`zsh-installer-cli` es una herramienta de línea de comandos que te permite instalar Zsh, configurar Zsh como tu shell predeterminado e instalar Oh My Zsh con el plugin de git de manera sencilla.

---

### **Instalación**

1. **Desde npm**:
   Si el paquete está publicado en npm, puedes instalarlo globalmente:
   ```bash
   npm install -g zsh-installer-cli
   ```

2. **Desde el código fuente**:
   Si tienes acceso al código fuente, puedes empaquetarlo e instalarlo localmente:
   ```bash
   npm pack
   npm install -g ./zsh-installer-cli-1.0.0.tgz
   ```

---

### **Uso**

Después de instalar, ejecuta el siguiente comando para iniciar la herramienta:

```bash
zsh-installer
```

Aparecerá un menú interactivo con las siguientes opciones:

1. **🔧 Instalar Zsh**
   Esta opción instala el shell Zsh en tu sistema.

2. **🌟 Instalar Oh My Zsh (con el plugin de git)**
   Descarga e instala Oh My Zsh, y activa el plugin de git en tu archivo `.zshrc`.

3. **🖥️ Configurar Zsh como el shell predeterminado**
   Configura Zsh como tu shell por defecto para el usuario actual.

4. **🚀 Instalar todo (Zsh, Oh My Zsh y configurarlo como predeterminado)**
   Ejecuta todas las acciones anteriores en un solo paso.

5. **❌ Salir**
   Finaliza el programa.

---

### **Ejemplo de Uso**

1. **Iniciar el CLI**:
   ```bash
   zsh-installer
   ```

2. Selecciona una opción del menú interactivo usando las flechas del teclado y presiona **Enter**.

3. Sigue las instrucciones en pantalla. La herramienta se encargará de realizar las acciones necesarias, como instalar Zsh, configurar el shell y más.

---

### **Requisitos**

- **Node.js**: Versión 14 o superior.
- **Acceso de superusuario**: Algunas acciones, como instalar Zsh o cambiar el shell predeterminado, requieren permisos elevados (puedes usar `sudo`).

---

### **Problemas Comunes**

1. **Permisos insuficientes**:
   Si encuentras problemas al instalar Zsh o configurar el shell predeterminado, intenta ejecutar el comando con `sudo`:
   ```bash
   sudo zsh-installer
   ```

2. **Zsh ya instalado**:
   Si Zsh ya está instalado, el programa te notificará y no intentará instalarlo nuevamente.

---

### **Contribuciones**

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork de este repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature-nueva-funcion
   ```
3. Realiza los cambios y haz un commit:
   ```bash
   git commit -m "Agrega una nueva función"
   ```
4. Envía un pull request.

---

### **Licencia**

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

### **Contacto**

Si tienes preguntas, problemas o sugerencias, por favor crea un [issue](https://github.com/rioyi/zsh-installer-cli-lib-npm/issues) o contacta al autor:

- **Autor**: rioyi
- **Correo**: wilbert.angarita@gmail.com
- **Sitio web**: [rioyi.dev](https://rioyi.dev)

---