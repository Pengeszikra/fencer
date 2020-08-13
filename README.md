# NOMAD-JS
Jsx based minimalist functional framework without dependency

**Highlights:**
- JSX syntax
- basic dom manipulation
- optional callbag sideffects

## Usage
```npm install nomad-js```

## Preffered: Pipeline operator

#### **.babelrc**
```json
{
  "plugins": [
    [ "@babel/plugin-proposal-pipeline-operator", {"proposal": "minimal"}],
    "@babel/plugin-syntax-jsx",    
    [ "@babel/plugin-transform-react-jsx", { "pragma": "nomad" }]    
  ]
}
```

*- KIHAL -*