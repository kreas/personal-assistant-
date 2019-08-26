serve: ;docker-compose up base

# Address Book
address_book.client.dev: ;docker-compose run address_book_client npm run-script dev
address_book.client.bash: ;docker-compose run address_book_client bash