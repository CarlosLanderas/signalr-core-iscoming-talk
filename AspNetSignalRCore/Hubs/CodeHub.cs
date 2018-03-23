using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetSignalRCore.Hubs
{
    public class CodeHub: Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            return base.OnDisconnectedAsync(exception);
        }

        public void EmitCodeChanges(string code)
        {
            Clients.AllExcept(new[] { Context.ConnectionId }).InvokeAsync("OnCodeChanged", code);
        }

        public void ChangeTheme(string theme)
        {
            Clients.All.InvokeAsync("OnThemeChanged", theme);
        }
    }
}
