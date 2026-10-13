// ===== DATOS COMPLETOS CON IMÁGENES =====
const estados = [
  {
    nombre: 'Nueva Gales del Sur',
    abrev: 'NSW',
    capital: 'Sídney',
    area: 800642,
    poblacion: '8,47 millones',
    color: '#2980b9',
    ciudades: [
      {
        nombre: 'Sídney',
        sitios: [
          {
            nombre: 'Ópera de Sídney',
            imagen: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',
            link: 'https://es.wikipedia.org/wiki/Ópera_de_Sídney'
          },
          {
            nombre: 'Puente de la Bahía de Sídney',
            imagen: 'https://images.unsplash.com/photo-1524820197278-540916411e20?w=600',
            link: 'https://es.wikipedia.org/wiki/Puente_de_la_Bahía_de_Sídney'
          }
        ]
      },
      {
        nombre: 'Newcastle',
        sitios: [
          {
            nombre: 'Faro de Nobbys Head',
            imagen: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600',
            link: 'https://es.wikipedia.org/wiki/Faro_de_Nobbys_Head'
          },
          {
            nombre: 'Playa Newcastle',
            imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            link: 'https://es.wikipedia.org/wiki/Newcastle_(Nueva_Gales_del_Sur)'
          }
        ]
      },
      {
        nombre: 'Coffs Harbour',
        sitios: [
          {
            nombre: 'Parque Nacional de Coffs Coast',
            imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
            link: 'https://es.wikipedia.org/wiki/Parque_Nacional_de_Coffs_Coast'
          },
          {
            nombre: 'Muelle de Coffs Harbour',
            imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600',
            link: 'https://es.wikipedia.org/wiki/Coffs_Harbour'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Victoria',
    abrev: 'VIC',
    capital: 'Melbourne',
    area: 227416,
    poblacion: '6,96 millones',
    color: '#27ae60',
    ciudades: [
      {
        nombre: 'Melbourne',
        sitios: [
          {
            nombre: 'Federación Square',
            imagen: 'https://images.unsplash.com/photo-1514395462911-4b9c6c0e4a2a?w=600',
            link: 'https://es.wikipedia.org/wiki/Federation_Square'
          },
          {
            nombre: 'Real Jardín Botánico',
            imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
            link: 'https://es.wikipedia.org/wiki/Real_Jardín_Botánico_de_Melbourne'
          }
        ]
      },
      {
        nombre: 'Geelong',
        sitios: [
          {
            nombre: 'Eastern Beach',
            imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            link: 'https://es.wikipedia.org/wiki/Geelong'
          },
          {
            nombre: 'Jardines Botánicos de Geelong',
            imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
            link: 'https://es.wikipedia.org/wiki/Jardines_Botánicos_de_Geelong'
          }
        ]
      },
      {
        nombre: 'Ballarat',
        sitios: [
          {
            nombre: 'Sovereign Hill',
            imagen: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600',
            link: 'https://es.wikipedia.org/wiki/Sovereign_Hill'
          },
          {
            nombre: 'Lago Wendouree',
            imagen: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600',
            link: 'https://es.wikipedia.org/wiki/Lago_Wendouree'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Queensland',
    abrev: 'QLD',
    capital: 'Brisbane',
    area: 1730648,
    poblacion: '5,56 millones',
    color: '#8e44ad',
    ciudades: [
      {
        nombre: 'Brisbane',
        sitios: [
          {
            nombre: 'South Bank Parklands',
            imagen: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600',
            link: 'https://es.wikipedia.org/wiki/South_Bank_Parklands'
          },
          {
            nombre: 'Monte Coot-tha',
            imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
            link: 'https://es.wikipedia.org/wiki/Monte_Coot-tha'
          }
        ]
      },
      {
        nombre: 'Cairns',
        sitios: [
          {
            nombre: 'Gran Barrera de Coral',
            imagen: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600',
            link: 'https://es.wikipedia.org/wiki/Gran_Barrera_de_Coral'
          },
          {
            nombre: 'Parque Nacional Daintree',
            imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
            link: 'https://es.wikipedia.org/wiki/Parque_Nacional_Daintree'
          }
        ]
      },
      {
        nombre: 'Gold Coast',
        sitios: [
          {
            nombre: 'Playa Surfers Paradise',
            imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            link: 'https://es.wikipedia.org/wiki/Surfers_Paradise'
          },
          {
            nombre: 'Parque Warner Bros. Movie World',
            imagen: 'https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=600',
            link: 'https://es.wikipedia.org/wiki/Warner_Bros._Movie_World'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Australia Occidental',
    abrev: 'WA',
    capital: 'Perth',
    area: 2529875,
    poblacion: '2,95 millones',
    color: '#e67e22',
    ciudades: [
      {
        nombre: 'Perth',
        sitios: [
          {
            nombre: 'Kings Park',
            imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
            link: 'https://es.wikipedia.org/wiki/Kings_Park'
          },
          {
            nombre: 'Isla Rottnest',
            imagen: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600',
            link: 'https://es.wikipedia.org/wiki/Isla_Rottnest'
          }
        ]
      },
      {
        nombre: 'Fremantle',
        sitios: [
          {
            nombre: 'Mercado de Fremantle',
            imagen: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
            link: 'https://es.wikipedia.org/wiki/Fremantle'
          },
          {
            nombre: 'Prisión de Fremantle',
            imagen: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
            link: 'https://es.wikipedia.org/wiki/Prisión_de_Fremantle'
          }
        ]
      },
      {
        nombre: 'Broome',
        sitios: [
          {
            nombre: 'Cable Beach',
            imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            link: 'https://es.wikipedia.org/wiki/Cable_Beach'
          },
          {
            nombre: 'Playa Roebuck',
            imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600',
            link: 'https://es.wikipedia.org/wiki/Broome'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Australia Meridional',
    abrev: 'SA',
    capital: 'Adelaida',
    area: 983482,
    poblacion: '1,87 millones',
    color: '#16a085',
    ciudades: [
      {
        nombre: 'Adelaida',
        sitios: [
          {
            nombre: 'Valle Barossa',
            imagen: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=600',
            link: 'https://es.wikipedia.org/wiki/Valle_Barossa'
          },
          {
            nombre: 'Museo de Australia Meridional',
            imagen: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600',
            link: 'https://es.wikipedia.org/wiki/Museo_de_Australia_Meridional'
          }
        ]
      },
      {
        nombre: 'Port Lincoln',
        sitios: [
          {
            nombre: 'Parque Nacional de Lincoln',
            imagen: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600',
            link: 'https://es.wikipedia.org/wiki/Parque_Nacional_de_Lincoln'
          },
          {
            nombre: 'Bahía Coffin',
            imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600',
            link: 'https://es.wikipedia.org/wiki/Port_Lincoln'
          }
        ]
      },
      {
        nombre: 'Victor Harbor',
        sitios: [
          {
            nombre: 'Isla Granite',
            imagen: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600',
            link: 'https://es.wikipedia.org/wiki/Isla_Granite'
          },
          {
            nombre: 'Bahía Encounter',
            imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600',
            link: 'https://es.wikipedia.org/wiki/Victor_Harbor'
          }
        ]
      }
    ]
  },
  {
    nombre: 'Tasmania',
    abrev: 'TAS',
    capital: 'Hobart',
    area: 68401,
    poblacion: '576.000',
    color: '#d35400',
    ciudades: [
      {
        nombre: 'Hobart',
        sitios: [
          {
            nombre: 'Monte Wellington',
            imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
            link: 'https://es.wikipedia.org/wiki/Monte_Wellington'
          },
          {
            nombre: 'Museo MONA',
            imagen: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600',
            link: 'https://es.wikipedia.org/wiki/Museo_MONA'
          }
        ]
      },
      {
        nombre: 'Launceston',
        sitios: [
          {
            nombre: 'Cataratas Cataract Gorge',
            imagen: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600',
            link: 'https://es.wikipedia.org/wiki/Cataract_Gorge'
          },
          {
            nombre: 'Parque Prince\'s Square',
            imagen: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600',
            link: 'https://es.wikipedia.org/wiki/Launceston'
          }
        ]
      },
      {
        nombre: 'Devonport',
        sitios: [
          {
            nombre: 'Cradle Mountain',
            imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600',
            link: 'https://es.wikipedia.org/wiki/Monte_Cradle'
          },
          {
            nombre: 'Muelle Spirit of Tasmania',
            imagen: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600',
            link: 'https://es.wikipedia.org/wiki/Devonport'
          }
        ]
      }
    ]
  }
];

// ===== GENERAR ESTADOS CON CIUDADES =====
const container = document.getElementById('estadosContainer');

estados.forEach((estado, index) => {
  const card = document.createElement('div');
  card.className = 'estado-card';
  card.style.borderLeftColor = estado.color;

  // Generar ciudades con sitios e imágenes
  const ciudadesHTML = estado.ciudades.map(ciudad => `
    <div class="ciudad-card" style="border-top-color: ${estado.color}">
      <h4>${ciudad.nombre}</h4>
      <ul class="sitios-lista">
        ${ciudad.sitios.map(sitio => `
          <li class="sitio-item">
            <img class="sitio-imagen" src="${sitio.imagen}" alt="${sitio.nombre}" loading="lazy"
              onerror="this.src='https://images.unsplash.com/photo-1524820197278-540916411e20?w=600&q=80'">
            <div class="sitio-info">
              <div class="sitio-nombre">${sitio.nombre}</div>
              <a class="sitio-link" href="${sitio.link}" target="_blank" rel="noopener">
                Ver más en Wikipedia →
              </a>
            </div>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="estado-header">
      <div class="estado-titulo">
        <h3>${estado.nombre} <span style="color:${estado.color}">(${estado.abrev})</span></h3>
        <span class="capital">🏙️ Capital: ${estado.capital}</span>
      </div>
      <div class="estado-meta">
        <span>📐 ${estado.area.toLocaleString('es-ES')} km²</span>
        <span>👥 ${estado.poblacion}</span>
        <span class="toggle-icon">+</span>
      </div>
    </div>
    <div class="ciudades-container">
      <div class="ciudades-grid">
        ${ciudadesHTML}
      </div>
    </div>
  `;

  // Abrir el primero por defecto
  if (index === 0) card.classList.add('open');

  // Evento de clic para expandir/colapsar
  const header = card.querySelector('.estado-header');
  header.addEventListener('click', () => {
    card.classList.toggle('open');
  });

  container.appendChild(card);
});

// ===== GENERAR TABLA =====
const tableBody = document.getElementById('tableBody');
estados.forEach(e => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><strong>${e.nombre}</strong></td>
    <td>${e.abrev}</td>
    <td>${e.capital}</td>
    <td>${e.area.toLocaleString('es-ES')}</td>
    <td>${e.poblacion}</td>
  `;
  tableBody.appendChild(row);
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});