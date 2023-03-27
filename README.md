## Try it out

https://squid.subsquid.io/squid-acala/v/v1/graphql

run this:

```gql
{
  accounts {
    id
    transactions {
      id
      nonce
    }
  }
}
```

## Dev note

The commands are self-explainatory

```sh
sudo sqd up
sudo sqd down
sudo sqd down && sudo sqd up && sqd process
sqd process
sqd build
sqd deploy .
sqd server
sqd migration:generate
sqd typegen
sqd migration:clean && sqd build && sqd migration:generate
sqd codegen
```

## Migration

```sh
sqd codegen
sqd build
sqd up
sqd migration:generate
sqd migration:apply
sqd deploy .
```
