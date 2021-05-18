# SASS-Grid-for-IE-Examples

https://sinseiki.github.io/SASS-Grid-for-IE-Examples

You can use CSS Grid on IE 11,

but IE has different Grid attributes, so you need to edit SASS to use Grid.

Here are 11 examples.

You can open these on IE 11.



## Here are attributes and values you can use on SASS for IE 11.


- Grid (4)
  - Container Attribute (4)
    - display
    - grid-template-areas
    - grid-template-rows
    - grid-template-columns

  - Item Attribute (4)
    - grid-area (2)
      - grid-row
      - grid-column
    - justify-self
    - align-self
    - z-index

  - Unit (3)
    - fr
    - min-content (1)
      - word-break
    - max-content

  - Function (2)
    - repeat
    - minmax


## And here are all attributes of CSS Grid below.

- Grid (4)
	- Container Attribute (5)
		- display
		- grid (4)
			- grid-template (3) (IE X)
				- grid-template-areas
				- grid-template-rows (2)
					- line-naming (IE X)
					- reverse-counting (IE X)
				- grid-template-columns (2)
					- line-naming (IE X)
					- reverse-counting (IE X)
			- grid-auto-flow (IE X)
			- grid-auto-columns (IE X)
			- grid-auto-rows (IE X)
		- gap (2) (IE X)
			- column-gap (IE X)
			- row-gap	(IE X)
		- place-items (2) (IE X)
			- justify-items (IE X)
			- align-items (IE X)
		- place-content (2) (IE X)
			- justify-content (IE X)
			- align-content (IE X)
		

	- Item Attribute (4)
		- grid-area (2) (IE needs)
			- grid-row (2)
				- grid-row-start (IE X)
				- grid-row-end (IE X)
			- grid-column (2)
				- grid-column-start (IE X)
				- grid-column-end (IE X)
		- place-self (2) (IE X)
			- justify-self
			- align-self
		- z-index
		- order (IE uses 'grid-area' instead of 'order')

	- Unit (5)
		- fr
		- min-content (1)
			- word-break
		- max-content
		- auto-fill (IE X)
		- auto-fit (IE X)

	- Function (2)
		- repeat
		- minmax
