<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="es_ES">
<context>
    <name>About</name>
    <message>
        <location filename="about.ui" line="14"/>
        <source>About Cppcheck</source>
        <translation>Acerca de Cppcheck</translation>
    </message>
    <message>
        <location filename="about.ui" line="64"/>
        <source>Version %1</source>
        <translation>Versión %1</translation>
    </message>
    <message>
        <location filename="about.ui" line="71"/>
        <source>Cppcheck - A tool for static C/C++ code analysis.</source>
        <translation>Cppcheck - Una utilidad para el análisis estático de código C/C++.</translation>
    </message>
    <message utf8="true">
        <location filename="about.ui" line="81"/>
        <source>Copyright © 2007-2015 Daniel Marjamäki and cppcheck team.</source>
        <oldsource>Copyright © 2007-2013 Daniel Marjamäki and cppcheck team.</oldsource>
        <translation>Copyright © 2007-2015 Daniel Marjamäki y el equipo de cppcheck.</translation>
    </message>
    <message>
        <location filename="about.ui" line="91"/>
        <source>This program is licensed under the terms
of the GNU General Public License version 3</source>
        <translation>Este programa está licenciado bajo los términos de GNU General Public License versión 3</translation>
    </message>
    <message>
        <location filename="about.ui" line="102"/>
        <source>Visit Cppcheck homepage at %1</source>
        <translation>Visita el sitio de Cppcheck en %1</translation>
    </message>
</context>
<context>
    <name>ApplicationDialog</name>
    <message>
        <location filename="application.ui" line="23"/>
        <source>Add an application</source>
        <translation>Añade una aplicación</translation>
    </message>
    <message>
        <location filename="application.ui" line="41"/>
        <source>Here you can add an application that can open error files. Specify a name for the application, the application executable and command line parameters for the application.

The following texts in parameters are replaced with appropriate values when application is executed:
(file) - Filename containing the error
(line) - Line number containing the error
(message) - Error message
(severity) - Error severity

Example opening a file with Kate and make Kate scroll to the correct line:
Executable: kate
Parameters: -l(line) (file)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="application.ui" line="76"/>
        <source>&amp;Name:</source>
        <translation>&amp;Nombre:</translation>
    </message>
    <message>
        <location filename="application.ui" line="86"/>
        <source>&amp;Executable:</source>
        <translation>&amp;Ejecutable:</translation>
    </message>
    <message>
        <location filename="application.ui" line="96"/>
        <source>&amp;Parameters:</source>
        <translation>&amp;Parámetros:</translation>
    </message>
    <message>
        <location filename="application.ui" line="138"/>
        <source>Browse</source>
        <translation>Buscar</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="59"/>
        <source>Executable files (*.exe);;All files(*.*)</source>
        <translation>Archivos ejecutables (*.exe);;Todos los archivos(*.*)</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="62"/>
        <source>Select viewer application</source>
        <translation>Selecciona la aplicación para visualizar</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="77"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="applicationdialog.cpp" line="78"/>
        <source>You must specify a name, a path and optionally parameters for the application!</source>
        <translation>¡Debes especificar el nombre, la ruta y opcionalmente los parámetros para la aplicación!</translation>
    </message>
</context>
<context>
    <name>FileViewDialog</name>
    <message>
        <location filename="fileviewdialog.cpp" line="42"/>
        <source>Could not find the file: %1</source>
        <translation>No se ha encontrado el fichero: %1</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="46"/>
        <location filename="fileviewdialog.cpp" line="60"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="fileviewdialog.cpp" line="56"/>
        <source>Could not read the file: %1</source>
        <translation>No se ha podido leer el fichero: %1</translation>
    </message>
</context>
<context>
    <name>LibraryAddFunctionDialog</name>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="23"/>
        <source>Add function</source>
        <translation>Añadir función</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="34"/>
        <source>Function name(s)</source>
        <translation>Nombre(s) de la función</translation>
    </message>
    <message>
        <location filename="libraryaddfunctiondialog.ui" line="44"/>
        <source>Number of arguments</source>
        <translation>Número de argumentos</translation>
    </message>
</context>
<context>
    <name>LibraryDialog</name>
    <message>
        <location filename="librarydialog.ui" line="14"/>
        <source>Library Editor</source>
        <translation>Editor de bibliotecas</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="22"/>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="29"/>
        <source>Save</source>
        <translation>Guardar</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="55"/>
        <source>Functions</source>
        <translation>Funciones</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="74"/>
        <source>Add</source>
        <translation>Añadir</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="108"/>
        <source>noreturn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="116"/>
        <source>False</source>
        <translation>Falso</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="121"/>
        <source>True</source>
        <translation>Verdadero</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="126"/>
        <source>Unknown</source>
        <translation>Desconocido</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="136"/>
        <source>return value must be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="143"/>
        <source>ignore function in leaks checking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="150"/>
        <source>Arguments</source>
        <translation>Argumentos</translation>
    </message>
    <message>
        <location filename="librarydialog.ui" line="162"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="52"/>
        <source>Library files (*.cfg)</source>
        <translation>Archivos de biblioteca (*.cfg)</translation>
    </message>
    <message>
        <location filename="librarydialog.cpp" line="54"/>
        <source>Open library file</source>
        <translation>Abrir archivo de biblioteca</translation>
    </message>
</context>
<context>
    <name>LibraryEditArgDialog</name>
    <message>
        <location filename="libraryeditargdialog.ui" line="14"/>
        <source>Edit argument</source>
        <translation>Editar argumento</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="20"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is bool value allowed? For instance result from comparison or from &apos;!&apos; operator.&lt;/p&gt;
&lt;p&gt;Typically, set this if the argument is a pointer, size, etc.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    memcmp(x, y, i == 123);   // last argument should not have a bool value&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="28"/>
        <source>Not bool</source>
        <translation>No bool</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="35"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;
&lt;p&gt;Is a null parameter value allowed?&lt;/p&gt;
&lt;p&gt;Typically this should be used on any pointer parameter that does not allow null.&lt;/p&gt;
&lt;p&gt;Example:&lt;/p&gt;
&lt;pre&gt;    strcpy(x,y); // neither x or y is allowed to be null.&lt;/pre&gt;
&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="43"/>
        <source>Not null</source>
        <translation>No null</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="50"/>
        <source>Not uninit</source>
        <translation>No uninit</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="57"/>
        <source>String</source>
        <translation>String</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="70"/>
        <source>Format string</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="92"/>
        <source>Min size of buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="101"/>
        <location filename="libraryeditargdialog.ui" line="208"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="109"/>
        <location filename="libraryeditargdialog.ui" line="219"/>
        <source>None</source>
        <translation>Ninguno</translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="114"/>
        <location filename="libraryeditargdialog.ui" line="224"/>
        <source>argvalue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="119"/>
        <location filename="libraryeditargdialog.ui" line="229"/>
        <source>constant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="124"/>
        <location filename="libraryeditargdialog.ui" line="234"/>
        <source>mul</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="129"/>
        <location filename="libraryeditargdialog.ui" line="239"/>
        <source>strlen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="137"/>
        <location filename="libraryeditargdialog.ui" line="247"/>
        <source>Arg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="164"/>
        <location filename="libraryeditargdialog.ui" line="274"/>
        <source>Arg2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="199"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="libraryeditargdialog.ui" line="320"/>
        <source>Valid values</source>
        <translation>Valores válidos</translation>
    </message>
</context>
<context>
    <name>LogView</name>
    <message>
        <location filename="logview.ui" line="17"/>
        <source>Checking Log</source>
        <translation>Comprobando el log</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="34"/>
        <source>Clear</source>
        <translation>Limpiar</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="68"/>
        <source>Save Log</source>
        <translation>Guardar el log</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="69"/>
        <source>Text files (*.txt *.log);;All files (*.*)</source>
        <translation>Archivos de texto (*.txt *.log);;Todos los archivos(*.*)</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="73"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="logview.cpp" line="74"/>
        <source>Could not open file for writing: &quot;%1&quot;</source>
        <translation>No se pudo abrir el fichero para escritura: &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="main.ui" line="26"/>
        <location filename="mainwindow.cpp" line="285"/>
        <location filename="mainwindow.cpp" line="346"/>
        <location filename="mainwindow.cpp" line="402"/>
        <location filename="mainwindow.cpp" line="465"/>
        <location filename="mainwindow.cpp" line="487"/>
        <location filename="mainwindow.cpp" line="789"/>
        <location filename="mainwindow.cpp" line="894"/>
        <location filename="mainwindow.cpp" line="1014"/>
        <location filename="mainwindow.cpp" line="1184"/>
        <location filename="mainwindow.cpp" line="1271"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="main.ui" line="70"/>
        <source>&amp;File</source>
        <translation>&amp;Archivo</translation>
    </message>
    <message>
        <location filename="main.ui" line="89"/>
        <source>&amp;View</source>
        <translation>&amp;Ver</translation>
    </message>
    <message>
        <location filename="main.ui" line="93"/>
        <source>&amp;Toolbars</source>
        <translation>&amp;Herramientas</translation>
    </message>
    <message>
        <location filename="main.ui" line="122"/>
        <source>&amp;Help</source>
        <translation>&amp;Ayuda</translation>
    </message>
    <message>
        <location filename="main.ui" line="132"/>
        <source>&amp;Check</source>
        <translation>&amp;Comprobar</translation>
    </message>
    <message>
        <location filename="main.ui" line="136"/>
        <source>C++ standard</source>
        <translation>C++ estándar</translation>
    </message>
    <message>
        <location filename="main.ui" line="143"/>
        <source>C standard</source>
        <translation>C estándar</translation>
    </message>
    <message>
        <location filename="main.ui" line="162"/>
        <source>&amp;Edit</source>
        <translation>&amp;Editar</translation>
    </message>
    <message>
        <location filename="main.ui" line="175"/>
        <source>Standard</source>
        <translation>Estándar</translation>
    </message>
    <message>
        <location filename="main.ui" line="195"/>
        <source>Categories</source>
        <translation>Categorías</translation>
    </message>
    <message>
        <location filename="main.ui" line="223"/>
        <source>&amp;License...</source>
        <translation>&amp;Licencia...</translation>
    </message>
    <message>
        <location filename="main.ui" line="228"/>
        <source>A&amp;uthors...</source>
        <translation>A&amp;utores...</translation>
    </message>
    <message>
        <location filename="main.ui" line="237"/>
        <source>&amp;About...</source>
        <translation>&amp;Acerca de...</translation>
    </message>
    <message>
        <location filename="main.ui" line="242"/>
        <source>&amp;Files...</source>
        <translation>&amp;Ficheros...</translation>
    </message>
    <message>
        <location filename="main.ui" line="245"/>
        <location filename="main.ui" line="248"/>
        <source>Check files</source>
        <translation>Comprobar archivos</translation>
    </message>
    <message>
        <location filename="main.ui" line="251"/>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
    <message>
        <location filename="main.ui" line="260"/>
        <source>&amp;Directory...</source>
        <translation>&amp;Carpeta...</translation>
    </message>
    <message>
        <location filename="main.ui" line="263"/>
        <location filename="main.ui" line="266"/>
        <source>Check directory</source>
        <translation>Comprobar carpeta</translation>
    </message>
    <message>
        <location filename="main.ui" line="269"/>
        <source>Ctrl+D</source>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <location filename="main.ui" line="278"/>
        <source>&amp;Recheck files</source>
        <translation>&amp;Volver a revisar ficheros</translation>
    </message>
    <message>
        <location filename="main.ui" line="281"/>
        <source>Ctrl+R</source>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <location filename="main.ui" line="290"/>
        <source>&amp;Stop</source>
        <translation>&amp;Detener</translation>
    </message>
    <message>
        <location filename="main.ui" line="293"/>
        <location filename="main.ui" line="296"/>
        <source>Stop checking</source>
        <translation>Detener comprobación</translation>
    </message>
    <message>
        <location filename="main.ui" line="299"/>
        <source>Esc</source>
        <translation>Esc</translation>
    </message>
    <message>
        <location filename="main.ui" line="308"/>
        <source>&amp;Save results to file...</source>
        <translation>&amp;Guardar los resultados en el fichero...</translation>
    </message>
    <message>
        <location filename="main.ui" line="311"/>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <location filename="main.ui" line="316"/>
        <source>&amp;Quit</source>
        <translation>&amp;Salir</translation>
    </message>
    <message>
        <location filename="main.ui" line="325"/>
        <source>&amp;Clear results</source>
        <translation>&amp;Limpiar resultados</translation>
    </message>
    <message>
        <location filename="main.ui" line="334"/>
        <source>&amp;Preferences</source>
        <translation>&amp;Preferencias</translation>
    </message>
    <message>
        <location filename="main.ui" line="346"/>
        <source>Style warnings</source>
        <translation>Advertencias de estilo</translation>
    </message>
    <message>
        <location filename="main.ui" line="349"/>
        <location filename="main.ui" line="352"/>
        <source>Show style warnings</source>
        <translation>Mostrar advertencias de estilo</translation>
    </message>
    <message>
        <location filename="main.ui" line="364"/>
        <source>Errors</source>
        <translation>Errores</translation>
    </message>
    <message>
        <location filename="main.ui" line="367"/>
        <location filename="main.ui" line="370"/>
        <source>Show errors</source>
        <translation>Mostrar errores</translation>
    </message>
    <message>
        <location filename="main.ui" line="451"/>
        <source>Show S&amp;cratchpad...</source>
        <translation type="unfinished">Mostrar S&amp;cratchpad...</translation>
    </message>
    <message>
        <location filename="main.ui" line="545"/>
        <location filename="mainwindow.cpp" line="563"/>
        <location filename="mainwindow.cpp" line="595"/>
        <source>Information</source>
        <translation>Información</translation>
    </message>
    <message>
        <location filename="main.ui" line="548"/>
        <source>Show information messages</source>
        <translation>Mostrar mensajes de información</translation>
    </message>
    <message>
        <location filename="main.ui" line="560"/>
        <source>Portability</source>
        <translation>Portabilidad</translation>
    </message>
    <message>
        <location filename="main.ui" line="563"/>
        <source>Show portability warnings</source>
        <translation>Mostrar advertencias de portabilidad</translation>
    </message>
    <message>
        <location filename="main.ui" line="571"/>
        <source>&amp;Filter</source>
        <translation>&amp;Filtro</translation>
    </message>
    <message>
        <location filename="main.ui" line="574"/>
        <source>Filter results</source>
        <translation>Resultados del filtro</translation>
    </message>
    <message>
        <location filename="main.ui" line="590"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit ANSI</translation>
    </message>
    <message>
        <location filename="main.ui" line="598"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit Unicode</translation>
    </message>
    <message>
        <location filename="main.ui" line="606"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="614"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="622"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
    <message>
        <location filename="main.ui" line="630"/>
        <source>Platforms</source>
        <translation>Plataformas</translation>
    </message>
    <message>
        <location filename="main.ui" line="644"/>
        <source>C++11</source>
        <translation>C++11</translation>
    </message>
    <message>
        <location filename="main.ui" line="655"/>
        <source>C99</source>
        <translation>C99</translation>
    </message>
    <message>
        <location filename="main.ui" line="663"/>
        <source>Posix</source>
        <translation>Posix</translation>
    </message>
    <message>
        <location filename="main.ui" line="671"/>
        <source>C11</source>
        <translation>C11</translation>
    </message>
    <message>
        <location filename="main.ui" line="679"/>
        <source>C89</source>
        <translation>C89</translation>
    </message>
    <message>
        <location filename="main.ui" line="687"/>
        <source>C++03</source>
        <translation>C++03</translation>
    </message>
    <message>
        <location filename="main.ui" line="692"/>
        <source>&amp;Print...</source>
        <translation>Im&amp;primir...</translation>
    </message>
    <message>
        <location filename="main.ui" line="695"/>
        <source>Print the Current Report</source>
        <translation>Imprimir el informe actual</translation>
    </message>
    <message>
        <location filename="main.ui" line="700"/>
        <source>Print Pre&amp;view...</source>
        <translation>Pre&amp;visualización de impresión...</translation>
    </message>
    <message>
        <location filename="main.ui" line="703"/>
        <source>Open a Print Preview Dialog for the Current Results</source>
        <translation>Abre el diálogo de previsualización de impresión para el informe actual</translation>
    </message>
    <message>
        <location filename="main.ui" line="708"/>
        <source>Library Editor...</source>
        <translation>Editor de bibliotecas...</translation>
    </message>
    <message>
        <location filename="main.ui" line="711"/>
        <source>Open library editor</source>
        <translation>Abrir el editor de bibliotecas</translation>
    </message>
    <message>
        <location filename="main.ui" line="375"/>
        <source>&amp;Check all</source>
        <translation>&amp;Seleccionar todo</translation>
    </message>
    <message>
        <location filename="main.ui" line="212"/>
        <source>Filter</source>
        <translation>Filtro</translation>
    </message>
    <message>
        <location filename="main.ui" line="380"/>
        <source>&amp;Uncheck all</source>
        <translation>&amp;Deseleccionar todo</translation>
    </message>
    <message>
        <location filename="main.ui" line="385"/>
        <source>Collapse &amp;all</source>
        <translation>Contraer &amp;todo</translation>
    </message>
    <message>
        <location filename="main.ui" line="390"/>
        <source>&amp;Expand all</source>
        <translation>&amp;Expandir todo</translation>
    </message>
    <message>
        <location filename="main.ui" line="398"/>
        <source>&amp;Standard</source>
        <translation>&amp;Estándar</translation>
    </message>
    <message>
        <location filename="main.ui" line="401"/>
        <source>Standard items</source>
        <translation>Elementos estándar</translation>
    </message>
    <message>
        <location filename="main.ui" line="406"/>
        <source>&amp;Contents</source>
        <translation>&amp;Contenidos</translation>
    </message>
    <message>
        <location filename="main.ui" line="409"/>
        <source>Open the help contents</source>
        <translation>Abrir la ayuda de contenidos</translation>
    </message>
    <message>
        <location filename="main.ui" line="412"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="main.ui" line="417"/>
        <source>Toolbar</source>
        <translation>Barra de herramientas</translation>
    </message>
    <message>
        <location filename="main.ui" line="425"/>
        <source>&amp;Categories</source>
        <translation>&amp;Categorías</translation>
    </message>
    <message>
        <location filename="main.ui" line="428"/>
        <source>Error categories</source>
        <translation>Categorías de error</translation>
    </message>
    <message>
        <location filename="main.ui" line="433"/>
        <source>&amp;Open XML...</source>
        <translation>&amp;Abrir XML...</translation>
    </message>
    <message>
        <location filename="main.ui" line="442"/>
        <source>Open P&amp;roject File...</source>
        <translation>Abrir P&amp;royecto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="456"/>
        <source>&amp;New Project File...</source>
        <translation>&amp;Nuevo Proyecto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="461"/>
        <source>&amp;Log View</source>
        <translation>&amp;Visor del log</translation>
    </message>
    <message>
        <location filename="main.ui" line="464"/>
        <source>Log View</source>
        <translation>Visor del log</translation>
    </message>
    <message>
        <location filename="main.ui" line="472"/>
        <source>C&amp;lose Project File</source>
        <translation>C&amp;errar Proyecto</translation>
    </message>
    <message>
        <location filename="main.ui" line="480"/>
        <source>&amp;Edit Project File...</source>
        <translation>&amp;Editar Proyecto...</translation>
    </message>
    <message>
        <location filename="main.ui" line="489"/>
        <source>&amp;Statistics</source>
        <translation>&amp;Estadísticas</translation>
    </message>
    <message>
        <location filename="main.ui" line="501"/>
        <source>Warnings</source>
        <translation>Advertencias</translation>
    </message>
    <message>
        <location filename="main.ui" line="504"/>
        <location filename="main.ui" line="507"/>
        <source>Show warnings</source>
        <translation>Mostrar advertencias</translation>
    </message>
    <message>
        <location filename="main.ui" line="519"/>
        <source>Performance warnings</source>
        <translation>Advertencias de rendimiento</translation>
    </message>
    <message>
        <location filename="main.ui" line="522"/>
        <location filename="main.ui" line="525"/>
        <source>Show performance warnings</source>
        <translation>Mostrar advertencias de rendimiento</translation>
    </message>
    <message>
        <location filename="main.ui" line="533"/>
        <source>Show &amp;hidden</source>
        <translation>Mostrar &amp;ocultos</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="280"/>
        <source>There was a problem with loading the editor application settings.

This is probably because the settings were changed between the Cppcheck versions. Please check (and fix) the editor application settings, otherwise the editor program might not start correctly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="347"/>
        <source>No suitable files found to check!</source>
        <translation>¡No se han encontrado ficheros para comprobar!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="403"/>
        <source>You must close the project file before selecting new files or directories!</source>
        <translation>¡Tienes que cerrar el proyecto antes de seleccionar nuevos ficheros o carpetas!</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="428"/>
        <source>Select directory to check</source>
        <translation>Selecciona una carpeta para comprobar</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="572"/>
        <source>File not found</source>
        <translation>Archivo no encontrado</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="575"/>
        <source>Bad XML</source>
        <translation type="unfinished">XML malformado</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="578"/>
        <source>Missing attribute</source>
        <translation type="unfinished">Falta el atributo</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="581"/>
        <source>Bad attribute value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="584"/>
        <source>Unsupported format</source>
        <translation>Formato no soportado</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="595"/>
        <source>Failed to load the selected library &apos;%1&apos;.
%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="673"/>
        <source>Failed to load %1. Your Cppcheck installation is broken. You can use --data-dir=&lt;directory&gt; at the command line to specify where this file is located.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="805"/>
        <source>XML files (*.xml)</source>
        <translation>Archivos XML (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="807"/>
        <source>Open the report file</source>
        <translation>Abrir informe</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="890"/>
        <source>Checking is running.

Do you want to stop the checking and exit Cppcheck?</source>
        <translation>El proceso de comprobación está en curso.

¿Quieres parar la comprobación y salir del Cppcheck?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="936"/>
        <source>License</source>
        <translation>Licencia</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="943"/>
        <source>Authors</source>
        <translation>Autores</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="951"/>
        <source>XML files version 2 (*.xml);;XML files version 1 (*.xml);;Text files (*.txt);;CSV files (*.csv)</source>
        <translation>Archivos XML versión 2 (*.xml);;Archivos XML versión 1 (*.xml);;Archivos de texto (*.txt);;Archivos CSV (*.csv)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="953"/>
        <source>Save the report file</source>
        <translation>Guardar informe</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="76"/>
        <source>Quick Filter:</source>
        <translation>Filtro rápido:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="417"/>
        <source>Select files to check</source>
        <translation>Selecciona los archivos a comprobar</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="466"/>
        <source>Found project file: %1

Do you want to load this project file instead?</source>
        <translation>Se encontró el fichero de proyecto: %1

¿Quiere cargar este fichero de proyecto en su lugar?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="488"/>
        <source>Found project files from the directory.

Do you want to proceed checking without using any of these project files?</source>
        <translation type="unfinished">Se encontraron ficheros de proyecto en el directorio.

¿Quiere proceder a comprobar sin utilizar ninguno de estos ficheros de proyecto?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="563"/>
        <source>The library &apos;%1&apos; contains unknown elements:
%2</source>
        <translation>La biblioteca &apos;%1&apos; contiene elementos deconocidos:
%2</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="587"/>
        <source>Duplicate platform type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="590"/>
        <source>Platform type redefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="673"/>
        <source>Error</source>
        <translation>Error</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="790"/>
        <source>Current results will be cleared.

Opening a new XML file will clear current results.Do you want to proceed?</source>
        <translation>Los resultados actuales serán eliminados.

Abrir un nuevo fichero XML eliminará los resultados actuales. ¿Desea continuar?</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="960"/>
        <source>XML files version 1 (*.xml)</source>
        <translation>Archivos XML versión 1 (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="964"/>
        <source>XML files version 2 (*.xml)</source>
        <translation>Archivos XML versión 2 (*.xml)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="968"/>
        <source>Text files (*.txt)</source>
        <translation>Ficheros de texto (*.txt)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="972"/>
        <source>CSV files (*.csv)</source>
        <translation>Ficheros CVS (*.cvs)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1016"/>
        <source>Cppcheck - %1</source>
        <translation>Cppcheck - %1</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1061"/>
        <location filename="mainwindow.cpp" line="1146"/>
        <source>Project files (*.cppcheck);;All files(*.*)</source>
        <translation>Ficheros de proyecto (*.cppcheck;;Todos los ficheros (*.*)</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1063"/>
        <source>Select Project File</source>
        <translation>Selecciona el archivo de proyecto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1091"/>
        <location filename="mainwindow.cpp" line="1160"/>
        <source>Project:</source>
        <translation>Proyecto:</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1148"/>
        <source>Select Project Filename</source>
        <translation>Selecciona el nombre del proyecto</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1185"/>
        <source>No project file loaded</source>
        <translation>No hay ningún proyecto cargado</translation>
    </message>
    <message>
        <location filename="mainwindow.cpp" line="1266"/>
        <source>The project file

%1

 could not be found!

Do you want to remove the file from the recently used projects -list?</source>
        <translation>¡El fichero de proyecto

%1

 no puede ser encontrado!

¿Quiere eliminar el fichero de la lista de proyectos recientes?</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="46"/>
        <source>English</source>
        <translation>Inglés</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="45"/>
        <source>Dutch</source>
        <translation>Holandés</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="44"/>
        <source>Chinese (Simplified)</source>
        <translation>Chino (Simplificado)</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="47"/>
        <source>Finnish</source>
        <translation>Finés</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="48"/>
        <source>French</source>
        <translation>Francés</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="50"/>
        <source>Italian</source>
        <translation>Italiano</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="52"/>
        <source>Korean</source>
        <translation>Coreano</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="55"/>
        <source>Spanish</source>
        <translation>Español</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="56"/>
        <source>Swedish</source>
        <translation>Sueco</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="49"/>
        <source>German</source>
        <translation>Alemán</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="53"/>
        <source>Russian</source>
        <translation>Ruso</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="51"/>
        <source>Japanese</source>
        <translation>Japonés</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="54"/>
        <source>Serbian</source>
        <translation>Serbio</translation>
    </message>
    <message>
        <location filename="main.cpp" line="100"/>
        <source>Cppcheck GUI.

Syntax:
    cppcheck-gui [OPTIONS] [files or paths]

Options:
    -h, --help              Print this help
    -p &lt;file&gt;               Open given project file and start checking it
    -l &lt;file&gt;               Open given results xml file
    -d &lt;directory&gt;          Specify the directory that was checked to generate the results xml specified with -l
    -v, --version           Show program version
    --data-dir=&lt;directory&gt;  Specify directory where GUI datafiles are located (translations, cfg)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="main.cpp" line="113"/>
        <source>Cppcheck GUI - Command line parameters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Platforms</name>
    <message>
        <location filename="platforms.cpp" line="37"/>
        <source>Built-in</source>
        <translation type="unfinished">Built-in</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="38"/>
        <source>Unix 32-bit</source>
        <translation>Unix 32-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="39"/>
        <source>Unix 64-bit</source>
        <translation>Unix 64-bit</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="40"/>
        <source>Windows 32-bit ANSI</source>
        <translation>Windows 32-bit ANSI</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="41"/>
        <source>Windows 32-bit Unicode</source>
        <translation>Windows 32-bit Unicode</translation>
    </message>
    <message>
        <location filename="platforms.cpp" line="42"/>
        <source>Windows 64-bit</source>
        <translation>Windows 64-bit</translation>
    </message>
</context>
<context>
    <name>Project</name>
    <message>
        <location filename="project.cpp" line="71"/>
        <location filename="project.cpp" line="123"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="project.cpp" line="72"/>
        <source>Could not read the project file.</source>
        <translation>No se ha podido leer el fichero.</translation>
    </message>
    <message>
        <location filename="project.cpp" line="124"/>
        <source>Could not write the project file.</source>
        <translation>No se ha podido escribir el fichero de proyecto.</translation>
    </message>
</context>
<context>
    <name>ProjectFile</name>
    <message>
        <location filename="projectfile.ui" line="14"/>
        <source>Project File</source>
        <translation>Archivo de proyecto</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="24"/>
        <source>Project</source>
        <translation>Proyecto</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="42"/>
        <source>Defines must be separated by a semicolon &apos;;&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="53"/>
        <source>Root:</source>
        <translation type="unfinished">Raíz:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="70"/>
        <source>Libraries:</source>
        <translation>Bibliotecas:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="79"/>
        <source>Note: Put your own custom .cfg files in the same folder as the project file. You should see them above.</source>
        <translation>Nota: Ponga sus propios archivos .cfg en la misma carpeta que el proyecto. Debería verlos arriba.</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="93"/>
        <location filename="projectfile.ui" line="242"/>
        <source>Paths:</source>
        <translation>Rutas:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="120"/>
        <location filename="projectfile.ui" line="183"/>
        <location filename="projectfile.ui" line="256"/>
        <source>Add...</source>
        <translation>Añadir...</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="127"/>
        <location filename="projectfile.ui" line="190"/>
        <location filename="projectfile.ui" line="263"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="134"/>
        <location filename="projectfile.ui" line="197"/>
        <location filename="projectfile.ui" line="270"/>
        <location filename="projectfile.ui" line="333"/>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="159"/>
        <source>Includes</source>
        <translation>Incluir</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="165"/>
        <source>Include directories:</source>
        <translation>Incluir los directorios:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="217"/>
        <source>Up</source>
        <translation>Subir</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="224"/>
        <source>Down</source>
        <translation>Bajar</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="236"/>
        <source>Exclude</source>
        <translation>Excluir</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="295"/>
        <source>Suppressions</source>
        <translation type="unfinished">Supresiones</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="301"/>
        <source>Suppression list:</source>
        <translation type="unfinished">Lista de supresiones:</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="326"/>
        <source>Add</source>
        <translation>Añadir</translation>
    </message>
    <message>
        <location filename="projectfile.ui" line="32"/>
        <source>Defines:</source>
        <translation>Definiciones:</translation>
    </message>
</context>
<context>
    <name>ProjectFileDialog</name>
    <message>
        <location filename="projectfiledialog.cpp" line="42"/>
        <source>Project file: %1</source>
        <translation>Archivo de proyecto: %1</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="290"/>
        <source>Select include directory</source>
        <translation>Selecciona una carpeta para incluir</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="313"/>
        <source>Select a directory to check</source>
        <translation>Selecciona la carpeta a comprobar</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="353"/>
        <source>Select directory to ignore</source>
        <translation>Selecciona la carpeta a ignorar</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="412"/>
        <source>Add Suppression</source>
        <translation type="unfinished">Añadir supresión</translation>
    </message>
    <message>
        <location filename="projectfiledialog.cpp" line="413"/>
        <source>Select error id suppress:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="translationhandler.cpp" line="31"/>
        <source>OK</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="32"/>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="33"/>
        <source>Close</source>
        <translation>Cerrar</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="34"/>
        <source>Save</source>
        <translation>Guardar</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="translationhandler.cpp" line="93"/>
        <source>Unknown language specified!</source>
        <translation>¡Idioma especificado desconocido!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="123"/>
        <source>Language file %1 not found!</source>
        <translation>¡Fichero de idioma %1 no encontrado!</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="129"/>
        <source>Failed to load translation for language %1 from file %2</source>
        <translation>Fallo al cargar la traducción para el idioma %1 desde el fichero %2</translation>
    </message>
</context>
<context>
    <name>ResultsTree</name>
    <message>
        <location filename="resultstree.cpp" line="1067"/>
        <source>File</source>
        <translation>Archivo</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1067"/>
        <source>Severity</source>
        <translation>Severidad</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1067"/>
        <source>Line</source>
        <translation>Línea</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1067"/>
        <source>Summary</source>
        <translation>Resumen</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="104"/>
        <source>Undefined file</source>
        <translation>Fichero no definido</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="208"/>
        <location filename="resultstree.cpp" line="733"/>
        <source>[Inconclusive]</source>
        <translation>[No concluyente]</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="260"/>
        <source>portability</source>
        <translation>portabilidad</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="263"/>
        <source>information</source>
        <translation>información</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="266"/>
        <source>debug</source>
        <translation>depuración</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="535"/>
        <source>Copy filename</source>
        <translation>Copiar nombre del archivo</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="536"/>
        <source>Copy full path</source>
        <translation>Copiar ruta completa</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="537"/>
        <source>Copy message</source>
        <translation>Copiar mensaje</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="538"/>
        <source>Copy message id</source>
        <translation>Copiar id del mensaje</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="539"/>
        <source>Hide</source>
        <translation>Ocultar</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="540"/>
        <source>Hide all with id</source>
        <translation>Ocultar todos con el mismo id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="541"/>
        <source>Open containing folder</source>
        <translation>Abrir carpeta contenedora</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="593"/>
        <location filename="resultstree.cpp" line="607"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="594"/>
        <source>No editor application configured.

Configure the editor application for Cppcheck in preferences/Applications.</source>
        <oldsource>Configure the text file viewer program in Cppcheck preferences/Applications.</oldsource>
        <translation>No se ha configurado una aplicación para editar.

Configura el programa para editar en Preferencias/Aplicaciones.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="608"/>
        <source>No default editor application selected.

Please select the default editor application in preferences/Applications.</source>
        <translation>No se ha definido una aplicación para editar prefeterminada.

Configura el programa para editar por defecto en Preferencias/Aplicaciones.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="637"/>
        <source>Could not find the file!</source>
        <translation>¡No se ha encontrado el fichero!</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="683"/>
        <source>Could not start %1

Please check the application path and parameters are correct.</source>
        <translation>No se ha podido ejecutar %1

Por favor comprueba que la ruta a la aplicación y los parámetros son correctos.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="697"/>
        <source>Could not find file:
%1
Please select the directory where file is located.</source>
        <translation>No se ha encontrado el fichero:
%1
Por favor selecciona la carpeta donde se encuentra.</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="704"/>
        <source>Select Directory</source>
        <translation>Selecciona carpeta</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="1067"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="248"/>
        <source>style</source>
        <translation>estilo</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="251"/>
        <source>error</source>
        <translation>error</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="254"/>
        <source>warning</source>
        <translation>advertencia</translation>
    </message>
    <message>
        <location filename="resultstree.cpp" line="257"/>
        <source>performance</source>
        <translation>ajuste</translation>
    </message>
</context>
<context>
    <name>ResultsView</name>
    <message>
        <location filename="resultsview.ui" line="26"/>
        <source>Results</source>
        <translation>Resultados</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="144"/>
        <source>No errors found, nothing to save.</source>
        <translation>No se han encontrado errores, nada que guardar.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="171"/>
        <location filename="resultsview.cpp" line="179"/>
        <source>Failed to save the report.</source>
        <translation>Error al guardar el informe.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="189"/>
        <source>Print Report</source>
        <translation>Imprimir informe</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="208"/>
        <source>No errors found, nothing to print.</source>
        <translation>No se encontraron errores, nada que imprimir.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="240"/>
        <source>%p% (%1 of %2 files checked)</source>
        <translation>%p% (%1 of %2 archivos comprobados)</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="253"/>
        <location filename="resultsview.cpp" line="264"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="254"/>
        <source>No errors found.</source>
        <translation>No se han encontrado errores.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="261"/>
        <source>Errors were found, but they are configured to be hidden.
To toggle what kind of errors are shown, open view menu.</source>
        <translation>Se han encontrado errores, pero están configurados para que no se muestren.
Para cambiar el tipo de comportamiento, abra el menú Ver.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="307"/>
        <location filename="resultsview.cpp" line="325"/>
        <location filename="resultsview.cpp" line="333"/>
        <source>Failed to read the report.</source>
        <translation>Error al leer el informe.</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="370"/>
        <source>Summary</source>
        <translation>Resumen</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="371"/>
        <source>Message</source>
        <translation>Mensaje</translation>
    </message>
    <message>
        <location filename="resultsview.cpp" line="373"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
</context>
<context>
    <name>ScratchPad</name>
    <message>
        <location filename="scratchpad.ui" line="14"/>
        <source>Scratchpad</source>
        <translation type="unfinished">Scratchpad</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="48"/>
        <source>filename</source>
        <translation>nombre de archivo</translation>
    </message>
    <message>
        <location filename="scratchpad.ui" line="55"/>
        <source>Check</source>
        <translation>Comprobar</translation>
    </message>
</context>
<context>
    <name>Settings</name>
    <message>
        <location filename="settings.ui" line="14"/>
        <source>Preferences</source>
        <translation>Preferencias</translation>
    </message>
    <message>
        <location filename="settings.ui" line="24"/>
        <source>General</source>
        <translation>General</translation>
    </message>
    <message>
        <location filename="settings.ui" line="85"/>
        <source>Ideal count:</source>
        <translation>Cantidad ideal:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="114"/>
        <source>Force checking all #ifdef configurations</source>
        <translation>Forzar comprobación de todas las configuraciones #ifdef</translation>
    </message>
    <message>
        <location filename="settings.ui" line="135"/>
        <source>Display error Id in column &quot;Id&quot;</source>
        <translation>Mostrar el Id del error en la columna &quot;Id&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="142"/>
        <source>Enable inline suppressions</source>
        <translation>Habilitar supresiones inline</translation>
    </message>
    <message>
        <location filename="settings.ui" line="163"/>
        <source>Paths</source>
        <translation>Rutas</translation>
    </message>
    <message>
        <location filename="settings.ui" line="169"/>
        <source>Include paths:</source>
        <translation>Rutas incluidas:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="187"/>
        <location filename="settings.ui" line="237"/>
        <source>Add...</source>
        <translation>Añadir...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="244"/>
        <source>Edit...</source>
        <translation>Editar...</translation>
    </message>
    <message>
        <location filename="settings.ui" line="258"/>
        <source>Set as default</source>
        <translation>Definir por defecto</translation>
    </message>
    <message>
        <location filename="settings.ui" line="315"/>
        <source>Language</source>
        <translation>Idioma</translation>
    </message>
    <message>
        <location filename="settings.ui" line="329"/>
        <source>Advanced</source>
        <translation>Avanzado</translation>
    </message>
    <message>
        <location filename="settings.ui" line="335"/>
        <source>&amp;Show inconclusive errors</source>
        <translation>&amp;Mostrar errores no concluyentes</translation>
    </message>
    <message>
        <location filename="settings.ui" line="342"/>
        <source>S&amp;how internal warnings in log</source>
        <translation>M&amp;ostrar advertencias internas en el log</translation>
    </message>
    <message>
        <location filename="settings.ui" line="41"/>
        <source>Number of threads: </source>
        <translation>Número de hilos:</translation>
    </message>
    <message>
        <location filename="settings.ui" line="121"/>
        <source>Show full path of files</source>
        <translation>Mostrar la ruta completa de los ficheros</translation>
    </message>
    <message>
        <location filename="settings.ui" line="128"/>
        <source>Show &quot;No errors found&quot; message when no errors found</source>
        <translation>Mostrar el mensaje &quot;No se han encontrado errores&quot;</translation>
    </message>
    <message>
        <location filename="settings.ui" line="194"/>
        <source>Edit</source>
        <translation>Editar</translation>
    </message>
    <message>
        <location filename="settings.ui" line="201"/>
        <location filename="settings.ui" line="251"/>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <location filename="settings.ui" line="226"/>
        <source>Applications</source>
        <translation>Aplicaciones</translation>
    </message>
    <message>
        <location filename="settings.ui" line="281"/>
        <source>Reports</source>
        <translation>Informes</translation>
    </message>
    <message>
        <location filename="settings.ui" line="287"/>
        <source>Save all errors when creating report</source>
        <translation>Guardar todos los errores cuando se cree el informe</translation>
    </message>
    <message>
        <location filename="settings.ui" line="294"/>
        <source>Save full path to files in reports</source>
        <translation>Guardar la ruta completa en los ficheros de informes</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="settingsdialog.cpp" line="82"/>
        <source>N/A</source>
        <translation>N/A</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="203"/>
        <source>Add a new application</source>
        <translation>Añadir una nueva aplicación</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="236"/>
        <source>Modify an application</source>
        <translation>Modificar  una aplicación</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="263"/>
        <source>[Default]</source>
        <translation>[Predeterminada]</translation>
    </message>
    <message>
        <location filename="settingsdialog.cpp" line="314"/>
        <source>Select include directory</source>
        <translation>Seleccionar carpeta a incluir</translation>
    </message>
</context>
<context>
    <name>StatsDialog</name>
    <message>
        <location filename="stats.ui" line="14"/>
        <location filename="stats.ui" line="228"/>
        <location filename="statsdialog.cpp" line="105"/>
        <source>Statistics</source>
        <translation>Estadísticas</translation>
    </message>
    <message>
        <location filename="stats.ui" line="27"/>
        <location filename="statsdialog.cpp" line="97"/>
        <source>Project</source>
        <translation>Proyecto</translation>
    </message>
    <message>
        <location filename="stats.ui" line="33"/>
        <source>Project:</source>
        <translation>Proyecto:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="53"/>
        <source>Paths:</source>
        <translation>Rutas:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="85"/>
        <source>Include paths:</source>
        <translation type="unfinished">Incluye las rutas:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="108"/>
        <source>Defines:</source>
        <translation type="unfinished">Definiciones:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="145"/>
        <location filename="statsdialog.cpp" line="101"/>
        <source>Previous Scan</source>
        <translation type="unfinished">Análisis anterior</translation>
    </message>
    <message>
        <location filename="stats.ui" line="151"/>
        <source>Path Selected:</source>
        <translation>Ruta seleccionada:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="161"/>
        <source>Number of Files Scanned:</source>
        <translation type="unfinished">Número de archivos analizados:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="181"/>
        <source>Scan Duration:</source>
        <translation type="unfinished">Duración del análisis:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="236"/>
        <source>Errors:</source>
        <translation>Errores:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="254"/>
        <source>Warnings:</source>
        <translation>Advertencias:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="272"/>
        <source>Stylistic warnings:</source>
        <translation>Advertencias de estilo:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="290"/>
        <source>Portability warnings:</source>
        <translation>Advertencias de portabilidad:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="308"/>
        <source>Performance issues:</source>
        <translation>Problemas de rendimiento:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="326"/>
        <source>Information messages:</source>
        <translation>Mensajes de información:</translation>
    </message>
    <message>
        <location filename="stats.ui" line="364"/>
        <source>Copy to Clipboard</source>
        <translation>Copiar al portapapeles</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>1 day</source>
        <translation>1 día</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="77"/>
        <source>%1 days</source>
        <translation>%1 días</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>1 hour</source>
        <translation>1 hora</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="79"/>
        <source>%1 hours</source>
        <translation>%1 horas</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>1 minute</source>
        <translation>1 minuto</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="81"/>
        <source>%1 minutes</source>
        <translation>%1 minutos</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>1 second</source>
        <translation>1 segundo</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="83"/>
        <source>%1 seconds</source>
        <translation>%1 segundos</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="87"/>
        <source>0.%1 seconds</source>
        <translation>0.%1 segundos</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="89"/>
        <source> and </source>
        <translation> y </translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="96"/>
        <source>Project Settings</source>
        <translation>Preferencias del proyecto</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="98"/>
        <source>Paths</source>
        <translation>Rutas</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="99"/>
        <source>Include paths</source>
        <translation type="unfinished">Incluye las rutas</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="100"/>
        <source>Defines</source>
        <translation type="unfinished">Definiciones</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="102"/>
        <source>Path selected</source>
        <translation>Ruta seleccionada</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="103"/>
        <source>Number of files scanned</source>
        <translation type="unfinished">Número de archivos analizados</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="104"/>
        <source>Scan duration</source>
        <translation type="unfinished">Duración del análisis</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="106"/>
        <source>Errors</source>
        <translation>Errores</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="107"/>
        <source>Warnings</source>
        <translation>Advertencias</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="108"/>
        <source>Style warnings</source>
        <translation>Advertencias de estilo</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="109"/>
        <source>Portability warnings</source>
        <translation>Advertencias de portabilidad</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="110"/>
        <source>Performance warnings</source>
        <translation>Advertencias de rendimiento</translation>
    </message>
    <message>
        <location filename="statsdialog.cpp" line="111"/>
        <source>Information messages</source>
        <translation>Mensajes de información</translation>
    </message>
</context>
<context>
    <name>ThreadResult</name>
    <message>
        <location filename="threadresult.cpp" line="54"/>
        <source>%1 of %2 files checked</source>
        <translation>%1 de %2 archivos comprobados</translation>
    </message>
</context>
<context>
    <name>TranslationHandler</name>
    <message>
        <location filename="translationhandler.cpp" line="135"/>
        <source>Failed to change the user interface language:

%1

The user interface language has been reset to English. Open the Preferences-dialog to select any of the available languages.</source>
        <translation>Ocurrió un error al cambiar el idioma de la interfaz gráfica:

%1

El idioma de la interfaz gráfica ha sido cambiado a Inglés. Abra la ventana de Preferencias para seleccionar alguno de los idiomas disponibles.</translation>
    </message>
    <message>
        <location filename="translationhandler.cpp" line="141"/>
        <source>Cppcheck</source>
        <translation>Cppcheck</translation>
    </message>
</context>
<context>
    <name>TxtReport</name>
    <message>
        <location filename="txtreport.cpp" line="73"/>
        <source>inconclusive</source>
        <translation>no concluyente</translation>
    </message>
</context>
</TS>
