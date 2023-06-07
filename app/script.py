import os

def imprimir_rutas(directorio):
    for ruta_actual, directorios, archivos in os.walk(directorio):
        for archivo in archivos:
            ruta_completa = os.path.join(ruta_actual, archivo)
            print(ruta_completa)

# Obtener el directorio donde se encuentra el archivo de script
directorio_raiz = os.path.dirname(os.path.abspath(__file__))

# Llamada a la función para imprimir las rutas de archivos
imprimir_rutas(directorio_raiz)
