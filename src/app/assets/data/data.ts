import { Categories, Login } from "../interfaces/interfaces"

export const categories: Categories[] = [{
  name: 'Categorías',
  //   subCategories: ['Vehículos', 'Inmuebles', 'Supermercado', 'Tecnología', 'Hogar y Muebles', 'Electrodomésticos', 'Herramientas', 'Construcción', 'Deportes y Fitness', 'Accesorios para Vehículos', 'Moda', 'Juegos y Juguetes', 'Bebés', 'Belleza y Cuidado Personal', 'Salud y Equipamiento Médico', 'Industrias y oficinas', 'Agro', 'Productos Sustentables', 'Servicios', 'Más Vendidos', 'Tiendas oficiales', 'Ver más categorías']
  // }, 
}, {
  name: 'Ofertas'
}, {
  name: 'Historial'
}, {
  name: 'Supermercado'
}, {
  name: 'Moda'
}, {
  name: 'Mercado Play',
  free: true
}, {
  name: 'Vender'
}, {
  name: 'Ayuda'
}]

export const login: Login[] = [{
  name: 'Creá tu cuenta',
  link: '/sign-up'
}, {
  name: 'Ingresá',
  link: '/login',
}, {
  name: 'Mis compras',
  link: '/my_purchases'
}]