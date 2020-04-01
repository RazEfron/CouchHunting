@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :traveler_id, :host_id, :conversation_id, :start_date, :end_date, :flexible_dates, :num_guests, :status
  end
end