
export const createExampleEnv = () => {
  const data = `
# SERVIDOR LOCAL O REMOTO CON PROTOCOLO DE CONEXION
PROTOCOL = 'http'
URL = '://localhost:'
PORT = 4500

# BASES DE DATOS
# 1- MySQL
DB_HOST = "localhost"
DB_USER = "root"
DB_DB = "localdigitalizacion"
DB_PORT = 3306
DB_PASSWORD = "Santi1026"

# 2- MONGODB
MONGODB_URI = "contraseña_db"


# SECURIDAD
# JWT
SECRET_KEY = "visita y crea en: https://joaneeet7.github.io/online-tools/sha256.html"
EXPIRE_TOKEN = "24h" || "1d" || 60 * 60 * 24 
API_KEY = 283749860296492735462875694752698

# NODEMAILER
MAIL_PORT = 465
MAIL_USER = "santiscano@gmail.com"
MAIL_PASSWORD = "ljdkwjndoiwej32ionw"

# SSL
SSL_PRIVATE_KEY = "SSL_PRIVATE_KEY"
SSL_CERTIFICATE = "SSL_CERTIFICATE"









#FIREBASE
API_KEY_FIREBASE = hgJHAGLGkhjgkk4hjgKJAHJG34H5
AUTH_DOMAIN = nombre.firebaseapp.com
PROJECT_ID = nombreproyecto
STORAFEBUCKER = nombreproyecto.appspot.com
MESSAGINGSENDERID = 81927396427627
API_ID = 9:873497568795634:web:shdgfkgsdfkwgiue

#BUCKET GCP
PROJECT_NAME = nombreproyecto
BUCKET_NAME = nombre-proyecto-bucket
BUCKET_ASSIGN = prueba

#SSL
SSL_PRIVATE_KEY =
SSL_CERTIFICATE =  
`;

    return data;
}
