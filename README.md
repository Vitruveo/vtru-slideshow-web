# Vitruveo Carousel

O Vitruveo Carousel é um slideshow de imagens com configurações personalizáveis.

## Configuração de Ambiente

Crie um arquivo **.env** com a seguinte configuração:

```
  VITE_ASSET_STORAGE_URL=
  VITE_GENERAL_STORAGE_URL=
  VITE_STORE_URL=
  VITE_API_URL=
```

## Uso

### Configuração do Tempo de Progresso

Defina o tempo de progresso entre as imagens passando o parâmetro `time` na URL. Exemplo:

```
http://localhost:5173?time=10
```
(Mínimo de 5 segundos)

### Alteração do Layout

Defina a orientação do layout com o parâmetro `layout` na URL. Os valores possíveis são `vertical` e `horizontal`. Exemplo:

```
http://localhost:5173?layout=vertical
```

### Exemplos de URL

- **Tempo de Progresso**:
  ```
  http://localhost:5173?time=8
  ```

- **Layout Vertical**:
  ```
  http://localhost:5173?layout=vertical
  ```

- **Tempo de Progresso e Layout Vertical**:
  ```
  http://localhost:5173?time=12&layout=vertical
  ```
---