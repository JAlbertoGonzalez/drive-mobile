/* eslint-disable quotes */
import LocalizedStrings from "react-native-localization"

const strings = new LocalizedStrings({
  "en_US": {
    "screens": {
      "login_screen": {
        "title": "Sign in to Internxt",
        "forgot": "Forgot your password?",
        "no_register": "Don't have account",
        "register": "Get started"
      },
      "register_screen": {
        "first": "{0} is a {1} cloud storage service. A {2} place for all your files. Welcome to the {3}. Welcome to {4}.",
        "second": "Files are {0} on your device. There is {1} we nor any other third-party can access them. {2}, as it should have always been.",
        "third": "Access Internxt from {7}, {8} or {9}. Start using Internxt today with {10} on us. {11} when needed, free for a month, cancel anytime.",
        "bold_first": ["Internxt", "different", "better", "revolution", "Internxt"],
        "bold_second": ["encrypted", "no way", "Privacy"],
        "bold_third": ["Desktop", "Web", "Mobile", "10 GB", "Upgrade your storage"],
        "security_title": "Internxt Security",
        "security_subtitle": "Internxt uses your password to encrypt and decrypt your files. Due to the secure nature of Internxt, we don't know your password. That means that if you ever forget it, your files are gone forever. With us, you're the only owner of your files.",
        "suggestion_1": "Store your password. Keep it safe and secure.",
        "suggestion_2": "Keep an offline backup of your password.",
        "create_account_title": 'Create an Internxt account'
      },
      "forgot_password": {
        "title": "Internxt security",
        "subtitle_1": "As specified during the sign up process, Internxt Drive encrypts your files, and only you have access to those. We never know your password, and thus, that way, only you can decrypt your account. For that reason, if you forget your password, we can't restore your account. What we can do, however, is to",
        "bold": " delete your account and erase all its files",
        "subtitle_2": ", so that you can sign up again. Please, if you still want to procede, enter your email below so that we can process the account removal."
      },
      "deactivation_screen": {
        "title": "Deactivation email",
        "subtitle_1": "Please check your email and follow the instructions to deactivate your account so you can start using Internxt again.",
        "subtitle_2": "Once you deactivate your account, you will be able to sign up using the same email address. Please store your password somewhere safe. With Internxt Drive, only you are the true owner of your files on the cloud. With great power there must also come great responsibility."
      },
      "file_explorer": {
        "title": "All files"
      },
      "storage": {
        "title": "Storage",
        "space": {
          "title": "Storage space",
          "used": {
            "used": "Used",
            "of": "of"
          },
          "legend": {
            "used": "Used space",
            "unused": "Unused space"
          }
        },
        "plans": {
          "title": "Storage plans",
          "title_2": "Payment length",
          "current_plan": "You are subscribed to the",
          "pay": "Pay per",
          "pre_pay": "Prepay",
          "month": "month",
          "months": "months"

        }
      },
      "create_folder": {
        "input": "Enter folder name"
      },
      "photos": {
        "screens": {
          "photos": {
            "albums": "Albums",
            "all_photos": "INTERNXT PHOTOS",
            "download_filter": "Download",
            "upload_filter": "Upload pending",
            "empty_download_filter": "Here you can see the photos that you have uploaded to Internxt Photos but are no longer stored on your phone's gallery.",
            "empty_upload_filter": "Here you can see the photos from your gallery that have not yet been uploaded to Internxt Photos.",
            "empty_none_filter": "Here you can see the photos from your gallery and the ones that you have uploaded to Internxt Photos.",
            "add_album": "Add album",
            "search_input": "Search a memory",
            "permission_denied": "We need media library permissions to be able to upload and download photos from the cloud. Access the app settings from your phone to grant the needed permissions, or enter again to Internxt Photos and click 'Open app settings'.",
            "open_app_settings": "Open app settings"
          }
        },
        "modals": {
          "create_album": {
            "title": "Create new album",
            "name_input": "Name your memories",
            "button": "Add photos to album",
            "name_error": "The album name can not be empty."
          },
          "selectable_photos": {
            "cancel_button": "Cancel",
            "title": "Add photos to ",
            "subtitle": "Uploaded photos",
            "done_button": "Done",
            "success_message": "Album saved successfully.",
            "already_exists_error": "An album with the same name already exists.",
            "other_error": "Could not create album.",
            "select_error": "You need to select at least one photo."
          }
        },
        "alerts": {
          "permission_denied": {
            "title_1": "Permission denied",
            "title_2": "Internxt Photos needs access to your gallery",
            "button": "Open app settings",
            "error": "Could not open app settings"
          }
        }
      }
    },
    "components": {
      "buttons": {
        "sign_in": "Sign in",
        "create": "Create an account",
        "next": "Next",
        "get_started": "Get started",
        "back": "Back",
        "creating_button": "Creating...",
        "deactivation": "Re-send deactivation email",
        "sing_up": "Sign up",
        "descrypting": "Decrypting...",
        "cancel": "Cancel",
        "confirm": "Confirm",
        "move": "Move",
        "share": "Share",
        "upgrade": "Mejorar"
      },
      "inputs": {
        "email": "Email address",
        "password": "Password",
        "confirm_password": "Confirm password",
        "first_name": "First name",
        "last_name": "Last name"
      },
      "empty_folder": {
        "title": "This looks empty!",
        "subtitle": "Click the upload button to get started."
      },
      "app_menu": {
        "search_box": "Search",
        "filter": {
          "date": "Date added",
          "size": "Size",
          "name": "Name",
          "type": "File type"
        },
        "upload": {
          "title": "Select type of file",
          "document": "Upload a document",
          "media": "Upload media",
          "take_photo": "Take a photo",
          "cancel": "Cancel"
        },
        "settings": {
          "storage": "Storage",
          "more": "More info",
          "photos": "Photos",
          "drive": "Drive",
          "contact": "Contact",
          "sign": "Sign out"
        }
      },
      "file_and_folder_options": {
        "styling": "Style color",
        "icons": "Cover icon",
        "type": "Type: ",
        "added": "Added: ",
        "size": "Size: ",
        "move": "Move",
        "share": "Share",
        "delete": "Delete"
      }
    },
    "modals": {
      "move_modal": {
        "title": "Choose a folder to move this file."
      },
      "share_modal": {
        "title": "Share your Drive file with this private link",
        "title2": "and enter the number of times you would like the link to be valid:",
        "share": "Share",
        "loading": "Loading link..."
      },
      "delete_modal": {
        "title": "Delete item",
        "subtitle": "Please confirm you want to delete this item. This action can not be undone."
      },
      "out_of_space_modal": {
        "title": "Run out of space",
        "subtitle": "You have currently used 3GB of storage. To start uploading more files, please upgrade your storage plan."
      },
      "coming_soon_modal": {
        "title": "Coming soon!",
        "subtitle": "Our fantastic devs are working on it, so stay tuned!",
        "got_it": "Got it!"
      }
    }
  },
  "es": {
    "screens": {
      "login_screen": {
        "title": "Inicia sesión en Internxt",
        "forgot": "¿Has olvidado la contraseña?",
        "no_register": "No tengo cuenta",
        "register": "Crear una"
      },
      "register_screen": {
        "first": "{0} es un servicio de almacenamiento en la nube {1}. Un lugar {2} para todos tus archivos. Bienvenido a la {3}. Bienvenido a {4}.",
        "second": "Los archivos son {4} en tu dispositivo. {5} de terceros podemos acceder a ellos. {6}, como siempre tuvo que ser.",
        "third": "Accede a Internxt desde {7}, {8} o {9}. Empieza a usar Internxt hoy con {10} gratis. {11} cuando lo necesites, gratis por un mes, cancela cuando quieras.",
        "bold_first": ["Internxt", "diferente", "mejor", "revolución", "Internxt"],
        "bold_second": ["encriptados", "Ni nosotros ni ningún servicio", "Privacidad"],
        "bold_third": ["escritorio", "web", "móvil", "10 GB", "Mejora tu almacenamiento"],
        "security_title": "Internxt Security",
        "security_subtitle": "Interxt usa tu contraseña para encriptar y decriptar tus archivos. Debido a la segura naturaleza de nuestro servicio, nosotros no sabemos tu contraseña. Esto significa que si algún día la llegas a perder, tus archivos se volverán inaccesibles. Con nosotros, tú eres el único propietario de tus archivos.",
        "suggestion_1": "Guardes tu contraseña. Mantenla sana y salva.",
        "suggestion_2": "Guarda una copia local de todos tus archivos.",
        "create_account_title": "Crear cuenta"
      },
      "forgot_password": {
        "title": "Internxt security",
        "subtitle_1": "Como se especificó durante el proceso de registro, Internxt Drive encripta tus archivos, y solo tú toenees acceso a ellos. Nosotros nunca llegamos a conocer tu contrasñea, y debido a esto, solo tú puedes desencryptar tus archivos. Si te has olvidado de la contraseña, no podemos restablecerla. Lo que sí que podemos hacer, es",
        "bold": " borrar tu cuenta y todos tus archivos",
        "subtitle_2": ", por lo que podrás volver a registrarte con el mismo correo electrónico. Por favor, introduce tu correo electrónico para que podamos procesar el borrado de tu cuenta."
      },
      "deactivation_screen": {
        "title": "Email de desactivación",
        "subtitle_1": "Por favor, comprueba el email que te hemos enviado y sigue las intrucciones para desactivar tu cuenta para que puedas seguir usando Internxt Drive.",
        "subtitle_2": "Una vez desactives tu cuenta, podrás volver a registrarte usando el mismo correo electrónico. Por favor guarda tu contraseña en un lugar seguro. Con Internxt Drive, solo tú eres el propietario de tus archivos. Un gran poder convella una gran responsabilidad."
      },
      "file_explorer": {
        "title": "Todos los archivos"
      },
      "storage": {
        "title": "Almacenamiento",
        "space": {
          "title": "Espacio de almacenamiento",
          "used": {
            "used": "Usado",
            "of": "de"
          },
          "legend": {
            "used": "Espacio usado",
            "unused": "Espacio sin usar"
          }
        },
        "plans": {
          "title": "Planes de almacenamiento",
          "title_2": "Duración del pago",
          "current_plan": "Actualmente estás suscrito al plan de",
          "pay": "Paga",
          "pre_pay": "Prepaga",
          "month": "al mes",
          "months": "meses"
        }
      },
      "create_folder": {
        "input": "Nombre de la carpeta"
      },
      "photos": {
        "screens": {
          "photos": {
            "albums": "Álbumes",
            "all_photos": "INTERNXT PHOTOS",
            "download_filter": "Descargar",
            "upload_filter": "Por subir",
            "empty_download_filter": "Aquí podrás ver todas las fotos que has subido a Internxt Photos pero que ya no tienes disponibles en la galería de tu móvil.",
            "empty_upload_filter": "Aqui podrás ver todas las fotos de la galería de tu móvil que todavía no se han subido a Internxt Photos.",
            "empty_none_filter": "Aquí podrás ver todas las fotos que tengas en la galería de tu móvil y las que has subido a Internxt Photos.",
            "add_album": "Crear álbum",
            "search_input": "Busca un recuerdo",
            "permission_denied": "Necesitamos permisos para acceder a la galería para subir y bajar fotos de la nube. Accede a las opciones de la app en tu teléfono para otorgar permisos, o vuelve a entrar a Internxt Photos y pincha sobre 'Abrir opciones de aplicación'.",
            "open_app_settings": "Abrir opciones de aplicación"
          }
        },
        "modals": {
          "create_album": {
            "title": "Crear nuevo álbum",
            "name_input": "Nombra tus recuerdos",
            "button": "Añade fotos al álbum",
            "name_error": "El nombre del álbum no puede estar vacío."
          },
          "selectable_photos": {
            "cancel_button": "Cancelar",
            "title": "Añade fotos a ",
            "subtitle": "Fotos subidas",
            "done_button": "Crear",
            "success_message": "Álbum creado correctamente",
            "already_exists_error": "Un álbum con el mismo nombre ya existe.",
            "other_error": "No se pudo crear el álbum.",
            "select_error": "Necesitas seleccionar por lo menos una foto."
          }
        },
        "alerts": {
          "permission_denied": {
            "title_1": "Permiso bloqueado",
            "title_2": "Internxt Photos necesita acceder a la galería",
            "button": "Abrir configuración",
            "error": "Error abriendo configuración"
          }
        }
      }
    },
    "components": {
      "buttons": {
        "sign_in": "Iniciar sesión",
        "create": "Crear cuenta",
        "next": "Siguiente",
        "get_started": "Empezar",
        "continue": "Continuar",
        "back": "Atrás",
        "creating_button": "Creando...",
        "deactivation": "Reenviar correo de desactivación",
        "sing_up": "Registarse",
        "descrypting": "Desencriptando...",
        "cancel": "Cancelar",
        "confirm": "Confirmar",
        "move": "Mover",
        "share": "Compartir",
        "upgrade": "Upgrade"
      },
      "inputs": {
        "email": "Correo electrónico",
        "password": "Contraseña",
        "confirm_password": "Confirmar contraseña",
        "first_name": "Nombre",
        "last_name": "Primer apellido"
      },
      "empty_folder": {
        "title": "¡Esto parece vacío!",
        "subtitle": "Aprieta en el botón de subida para empezar."
      },
      "app_menu": {
        "search_box": "Buscar",
        "filter": {
          "date": "Fecha de subida",
          "size": "Tamaño",
          "name": "Nombre",
          "type": "Tipo de archivo"
        },
        "upload": {
          "title": "Selecciona el tipo de archivo",
          "document": "Sube un documento",
          "media": "Sube multimedia",
          "take_photo": "Haz una foto",
          "create_folder": "Nombre de la carpeta",
          "cancel": "Cancelar"
        },
        "settings": {
          "storage": "Almacenamiento",
          "more": "Más información",
          "photos": "Fotos",
          "drive": "Drive",
          "contact": "Contacto",
          "sign": "Cerrar sesión"
        }
      },
      "file_and_folder_options": {
        "styling": "Color de la carpeta",
        "icons": "Icono",
        "type": "Tipo: ",
        "added": "Añadido: ",
        "size": "Tamaño: ",
        "move": "Mover",
        "share": "Compartir",
        "delete": "Borrar"
      }
    },
    "modals": {
      "move_modal": {
        "title": "Selecciona una carpeta a la que mover el archivo."
      },
      "share_modal": {
        "title": "Comparte este archivo con este link privado",
        "title2": "e introduce el limite de descargas posibles",
        "share": "Compartir",
        "loading": "Cargando link..."
      },
      "delete_modal": {
        "title": "Borrar",
        "subtitle": "Por favor, confirma que realmente quieres borrar este objeto. Esta acción no puede deshacerse."
      },
      "out_of_space_modal": {
        "title": "No tienes más espacio",
        "subtitle": "Actualmente has usado 10GB de almaceniamiento. Para seguir subiendo más archivos, por favor, mejora tu plan de almacenamiento."
      },
      "coming_soon_modal": {
        "title": "¡Próximamente!",
        "subtitle": "Nuestros fantásticos programadores están trabajando en ello, así que mantente al tanto!",
        "got_it": "Entendido!"
      }
    }
  }
})

export default strings