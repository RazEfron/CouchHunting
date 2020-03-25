@conversations.each do |conversation|
  json.set! conversation.id do
    json.extract! conversation, :id, :author_id, :receiver_id  
  end
end
