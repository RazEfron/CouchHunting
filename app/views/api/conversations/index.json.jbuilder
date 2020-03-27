@conversations.each do |conversation|
  json.set! conversation.id do
    json.extract! conversation, :id, :author_id, :receiver_id  
    json.messageId conversation.messages.limit(1).ids[0]
  end
end
