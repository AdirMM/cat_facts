import React from 'react'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App() {
  const {
    fact,
    loading: factLoading,
    error: factError,
    getRandomFact,
  } = useCatFact()
  const { image, loading: imageLoading, error: imageError } = useCatImage(fact)

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section className="grid">
        <div className="fact">
          {factLoading && <p>Cargando dato</p>}
          {factError && <p>Error al cargar el dato: {factError}</p>}
          {fact && !factLoading && <p>{fact}</p>}
        </div>

        {imageLoading && <p>Cargando Imagen</p>}
        {imageError && <p>Error al cargar la imagen: {imageError}</p>}
        {image && !imageLoading && (
          <div>
            <img src={image} alt="" />
          </div>
        )}
      </section>

      <button onClick={getRandomFact}>Get other fact</button>
    </main>
  )
}
