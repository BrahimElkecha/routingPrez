import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-front',
  templateUrl: './dev-front.component.html',
  styleUrls: ['./dev-front.component.css']
})
export class DevFrontComponent implements OnInit {
  devFront: any = {};
  devsFront: any = [
    {
      id: 1,
      name: 'Anouar Elbounouhi',
      age: '32 years old',
      description: 'Angular developer 1',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'Mouad Ennaciri',
      age: '35 years old',
      description: 'Angular developer 2',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 2,
      name: 'Younes Lakhal',
      age: '30 years old',
      description: 'Angular developer 3',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEBAPDxAPFQ8VEA8QDxAPEBAVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lHyYtLS0rLS0tLS0tLS0vLy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABBEAABAwIDBAcGAwUIAwEAAAABAAIDBBEFITEGEkFhEyJRcYGRoQcUMkJSsSPB0UNicpLhFiQzU3OCovBjsvEV/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAQQBBAICAwAAAAAAAAABAhEDBBIhMUETMlFhInEF0RSBwf/aAAwDAQACEQMRAD8A3xJSsiy6FnPIoUrITsCNkKSVkWAkJ2RZFgJCdkIsBIQmixCUXOABJIAFySTYAdpKp4xi0FJGZZ3hjRoNXPPY1vErjm1+209cTG28NNfKIHN/YZDx7tO9QnkUSyGNyNq2u9orW70NCQ52jqm12j/THHv07LrWcF9oNbAbPf7yy+bZc3eDxmPVagXJXWR5pt3Zq9KFVR3rZ7bKkrLNa/opj+xkIDif3To778lsS+ZWuW37Oe0Cqpd1kh95hFhuyE77R+6/XwN1fDUJ+4olga9p2tCwmz+1VJWgCKTdk4wyWbIO4aO8LrOLQnfRRQkJpJgCE0kACEJpAJCaEwEmhCVgTQmhV2SoVkJoRYCshCYTsBWSTQiwEiydkIsKEtY2v2ygoGlgtLUkdWIHJvYZDwHLUrBbb+0IRb1PRODpMw+o1bH2hn1O56DmuT1E7nkuc4uc4kuc4kkk6klU5M1cIux4b5ZcxvGp6uQyzvL3HQaNYOxreAWNLlAlF1ms0k7pgrzundID0unvLzBUkAescpaQWkgjMEGxB7QVvGzntIqILMqQamIfMTaZo5O+bx81oV1IFSjOUeiMoKXZ9FYLj1NWN3oJQ4/Mw9WRve05+Oiyi+aKWpfG4Pje5j2/C5pLXDuIXRNmvaY9to61vSN06dgs8fxNGTvC3itMM6fZmlha65OppWVfD6+GoYJIZGSsPzNN7ciOB5FWQrrKhITTTsCKE7IsiwBCaEWBNCEKmyYJJoTsBITQiwEiyao4visNJEZp3hjBpxc4/S0cShsEizUTsjY6SRzWMYCXPcQGtHaSuRbb7fvqN6npC6ODR8nwyTcv3Wep9FiNsdr5q927nHTtPUhB17HP7T6BauSs88l8I0Qx1yxOK8nlTKg5VFwmtU7JtCZCkIgmAmQvWFqBA1oChI5Se5eZKBkUwmgBJgSavUFebQpKIzJYNi1RTStfTyPjeSB1TYOz0cNHDvXXf7eU8dS6mqB0RAZaYZx3c0GzgPh1107lyTZunD6qFrvhDt5x4AMBcSfJeWKVnTTyy/W5xHIfKPKyhGco5uPjn/g5Y4yg7+T6Khma9oexzXtcLtc0hzSORC9FwDANo6mideGQ7t+tE7rRu728DzFiuq7M7c01YWxv/AndkGON2vPYx35Gy3xyKRinjcTakIQrLIUFkJpIsVE0JoVVk6EhNJFhQITQiwoRC4/tzgOKyyunmj6aMX3BA4yNibwAZ8Q5my7AiyjJbiUZbWfML2EG3EajiFAhfReM7NUdXnPAxzv8xvUk/mbmfFaLjXsqObqScHsinyPg9o+4VTxtF6yJnLCFFzVmsX2dq6UkTwSRj67b0Z7njJY1sd78lAsFTxX1BI5K26gYCQ6YDK9mAuzte1ytjw/ZqVkDJX9XptGZ33SNSqv/AOA874txv4Kt5VZasEq6NUeM7AkjtQ0kLOvwJxtYEC5zK948A7c0/VQLBJmuE3SW0DCoxq255qpV4ODm3LkhZUDwSMEptUpaZzTYqDQp3ZVTXDJsUwFKOIr1bESQALk5AAXJPYAo2OjIYZFuU9VUaGzIWHnIbv8A+DT/ADLGtYSbDMnIDtPYui4RsRNU0lPG93u8YfJJNvNPSlxs1oDOTRxW8YDstSUYBijBk4zSdeQ9x+XwsjDjcrk/LI5MqjSRzLZ72e1dRZ8o91iPGQXkI5R8P91l0zANl6WiA6KPek4zSWdIe4/L3CyzaFsjFR6MspOXYrITQpWRoSFJCLCiSE0lWTBJOyECEhNCAEhNCAEhNJACc0EEEAg6g5grUNpdkKN3RyshZE/pGb5YCxrm5k3aMuAzstwVDHP8Bzvp3T62/NRn7WWYvejHbzLWcAQLWBGWWir1L4tQ1oJBBIAzWAlxBxJAOSTZe0rkUd5DkgBFuZIXg+myVwuC83Bxvp9lIRhKmn1VN7LZrNVNuJCxlQRwTVkXRgq2EG6xYgu8AceHNZysZbPgvXZyje6bpWuLAy43gbHrCxAPDLiFfGVLkyTxuUqRlsA9n9TPZ8v92jNs3tvI4cmcPGy6DhWAUWHt32sG9oZn9eQk8AeHcLKvsZXFwlhLiejsW3JJAOR15qOKYq2aojgj67Y3dcjRz9AAeIFyrJ5Y48W+Pfj9meWGby7JdI2KktuNP1dbxdmfuvZRiZYAdgUlqhairMkqtghCFKxUJNCEWFAhFkIsVE0JoUCYkJoQAkIQgAQhCBCQmhMYl4V0YdFI12QLHgnW2RzXuhALhnG5sTjhPXK9KTaKB7g3ME9oIC89t8GZTVUj3NMjZTvxM4DeuSLcjdYO7werAwNHEAW8Cc1zpRStHWhOTp2byZm2uM1rOJ4pVOLgwCNg+Y6q3hVW4tIIsRwVCuY6RxBvblqqk2mXyVmIfdx/FqQPByv0VGfijnEg4jPNXqWliy32b5aLN3jcAdgCsspmsN2ttfgFNzb6K44vkpVUBLDfUL1wJxbGAO1xOQsbFe8xyKo0Dy5m6Lizze2puNPVLuJJUpI2TC3uc+QR3vM1jcr5XzPpbzWzbN4Y0SOkA6rOqw/U6w3nJbKYWRTdawMhNzYXsLAAcslskMQY0NaLAaBPBgnLJumuF19mfVZ401F8vsmhCF1Dl0CSaEgoSaEJgCEJoAkiyEKBIEISTChoSQgAQhCAoEIQgKEhCEBRqu31FvxRy2zYS09ztPt6rSn05IAvkF07aGn6SmmbqQ3eHe3rfktAbYNueAWHUpJ2dTRNuNEcDwh8vSdG0WbqSbAns71RrA6CQskjIIOYt637Fl8NxgRARBwYCSb6XJ7SsfjuLfitcdxwtmSLm3YOzVU7r4NW2lbJ07GyDeAsexE0W6L9iox4qxumWd8hkLrIR1jZmEjUZEFJtrsPxfRisSnAYbalXvZ1SNmnex4yALstbi36rA4nJ1rXWR2OxN1LOHgb2+4MI7Q62nPRX46XMujJl3P29nZo2BoDQLACwA4JoabgHtQt5zAQhCBAhCEACEIQAXQhCAJpIQokhpJIugBoSQgAQhCABCEIAEJITACuWbTQup3Tw5gCzoz9TCcvLTwXU1gdrsAFZF1CGzx3MTjob6sdyPoVTmx70X6fL6cvpnI2DePXktplqrL4ojYuc59uH6qyyk1Y+Pcljyew9VwP6FJw3SB0YuTmS4usO3JYW+aOrBRqyrDDvndjYABa7nXNv6r3kcaZxJu4PGfesrHI1rblze4CwHgtexuu33BoPVB80K5OhTqKsqTyXN7fFwWy7KYWXSMefghu5x+p5GQ8L38Atcw2ndNKxrBck2b+vcupUNK2GNsbNG6ni48SVDPk2raiqMb5Z5Yh7Qaelk93ljlLmBt3C1iCNQtqw2ubPEyVlw14BAcLEXFxcLnVXsz75iIkePwImxmT/wAjsyGfa/8AVb7TODCBo3S3Adi6+lhLJhUmcvPUclIySSLounRAE1FO6YAhJCAHZCSE6ETukhJQokNCSCigGhK6EUA0JXSunQiSFG6LooBoSui6KCx3QorzqJdxjnn5QT5BDpKxrl0cv2vdLLXTyw/sgGH94M19brXocXzdvtJcMtOI1C2qPs+aZxc48gd4rn1DV3mlv87nuHiT/RcjFJ5FKTO3kisTjEy1VUvf8MZHfkAseKM3u835cFl6aTKxVvC8OM0lz8Ldf0S9VxRN4ovlmX2GwqxMzhoMvFbRKM0YeWxs3QLD7r3DN430vp+qy8yl9shJ8/Rcp4t1oHHim9q9AV5VMzY2Oe8gNYC5xPAAXJXrsa2RS+Diz/Jmm7cbbTUZFNCW9K5rXb5aHbjSSBrkSbK9sp7Q6eoY1lU9lPUaHeBbE/sIdoDyNlyLH8TdVVMtQ79o47o+loyaPIBUAVinkuTaJbElR9QseHAOaQ4HQggg9xCd1864DtLVUTgYJXNbxjPWid3tOXiLFdT2d9pFLUAMqP7tKeLs4XHk/wCXx801JMraaN3RdQY8OAcCCDoQbgjkVK6kIkhRukgCaLql7yj3pPayO9F26V1T96S95S2hvRduhUveUveU9ob0XkKj7yUGpKNob0XklS95KXvJRtFvRfSusZU4i2Npe94Y0akmwWn4ptp0l2RXDfqGp/RQm9pZBORulXijGZDrO5aBadV486qqJYWuIZTtG9Y/E9+QHcBveNuxa3XbRGOMlpO9nr28AlsQ0mOaVxu6WQXJ47ov93LHqcjWOTNumxr1IpGdiG6XybpcI27oaNSXa28FzB8Do5XNIs5hzXVg126AOJc53jkB5AeaxE2zw6eGVoLmO3mStIvYG5aeYBsO6yq0sNuNL5NWrlvm2vBhaAlwFsybLecNpBGwDjqe9Yun2W6GoZI2Q9EbnoSNHdod2clsu5oAsmpWye0thk3RQ6dnE6DTmsnSssLnU+iqsjvkMgPXkq2IYkKdrpCbRxi5vpl2LXoMNP1Zr9f2Z9Rk42R/2ZglaP7UsX6KmbTtNn1J63+m2xPmbDzV7CdvaGewe/3d5+WbIeDxl52XOvaDioqa6QscHRxBsbCDdptm4g/xE+S7GXLHZUX2c+MebNaJSTSWMkMFTDl5phAGdwHaarpCOglcG3/wndeM/wC06eFiurbO7cRzhramM0sh+Ym8TvHVvjlzXLdlIYg4zSkEsyY3n2rYsWxZjInOABccmBwBuTxI5ap+o0LYpHWPe4v8yP8Anb+qF84dIfqPohT9X6I+l9neulR0qr3S3lqowWWelS6VV7o3kUgssdKjpVX3kFydBZ79KjpVXD0byQrLHSo6VV95UsaqzFTzyA2LI3kd9svVD4Q1y6NG222h6eYRMd+DFe1tHu4n8gsHDMc81jXm5VuM2asMnfLOlFJKkeVdKSbLe9koC2jiNrdIXuHO7rfkuePdckrsMNKI4qOHTcghv3uBcfVyx6vqMflmzSe9y+Ee8NPYDNWYoyDqlHGBopydVpPHQeKtTUVb8EmnJ0hMdvPLuAyHgvaHNxF7W1P5d6hSQE2A8eSsmkZGDujNxuTqSefksemwvPJ5JdFuaax/iuxlwaCGnI+nauYe0LH+lf7tGfw4j1yD8bxw7h91uW1mK+60znDKR/Vj7zx8BcrjUj7ntXTb8Iwvjk8ygouhRKwQkhMQ0wgBSYMwEAZGE7oFl5VNQXa9w7v+/ZEzt3LivFzv6JEiF0JeSExHX8L2hjqJHxt6rgN5o7Rx8j6ELKBy41h1e+N/TNNnMc1w53vcHkQur4dXNniZKz4XjTiDxB7jdasU7VMw58e12ui7vILl5XTVxQeocgPXnvdyyVPhsb2tIm3SRo+M2vxzbf7KvJlhj9zoshinP2qyi5w4KN1lv7Oyn4HwP/hlF/I2XnLs7VN/YuP8Ja77FCywfTB4prtGODlg9tJbUU3Pox5vatifQTM+OKQDmw/ey0v2hk9FEwXsXkkdzcvuicltY8UHvRz5e0z+qAoBqUvBYzoCp23cBrm3xzXa69o6fdOkbYm/ysaFxiiJD297fuF2bEG3qpb6b7vused3lgv2a9Ovwm/osg8AlI0ue1mts/E6L1aQM1cwamJJlcNTl/3kFn1+ZY8dfJp08be5+C5HTdFHbVzj1j3DIeqp1RAtfmslWnJvj91z72j470EQgYbSzA3I1YzQnx081o0LrBH7KM3Mm2aRtvjfvVQQ03iiuyPsOfWd4n0AWtFSeVBa0ZJO2FkJlFkESKbQmGqRTEIlShdY37FAKSAJlxc654+iTznkk1IiyQxITQkMlE6wcO23oVtOw+OdDJ0EhtHKeqTox+g8Dp5LU3JgqcZU7RCUVJUztyC7/tlrux+Ne8Q7jyTNFk7tc35XfkVn99bk7Vo5souLpk7rI4e+7SPpPoViw5WsPl69vqyWXW49+F/XJo0eTZmX3wZF1W0PDCbE2tfTPe4/7T6K7T1rhfde4WyNnELFV1AJt3rFpac7AHebcEtPkFTbg8rBaOXdsAMriwsQfuLfwrgQS+aPRNJ9m3Q4xMPn3v4mgr0lxJkgtNTwTDscwH7grTQ2ra3rFzvhBAsciC0kEZ5WB8V60mIS9Ixkg+PeBNt21+s0c9beB7Fcp5IriRW8UH4MzU7P4NPfpKBkZPGL8P8A9SFhqz2X4TLnFU1EBOgduvaPMA+q9KXF90ATFpfvFrty3UvoHNJvqDpwF17U2MNdE+Wzh0QLy3VxbnnY2+k+itjnyeeSuWmXg15/sbla4Pp6ynmAc02eHRmwPLeWx4vs7ViaSRsJe1xuC0tcfK91dhqmusWuab2Isc8wDp3EK3HXSNtaRw7BfXwQ8ilJSkuUKMZQTS8mGbh0h3Wua5pJG9cEWHFZ9jAAANBopjEHvBa83yyyAz8EHguR/JScsqfg04X+FGE2qxaOkiEspyzAaLbzjfguDY7ibqqeSZ+rzkPpaPhaPBdS9s7T7tTOAG6JHgnjctuB3ZHyXHXLraB3hiZdS6dESmo3TC3mQEBNMIEMBIoTQMAo3TSCBFlm6xt9XH0Vcpb10wgYJIQkAOSCHICYGRwPEDTzMlHA2cPqadQurwTNe1r2m7XgEHtBXF7rd9gsUcQ6BxyF3Mv/AMh+fmr8M6dGbUY7W5G62U4zYg8Qq++VIPWl8qjEnTs2KM3se0XC9A4a6dl8r+apYdLeMdrDbwWThnsLEG2diLEeS4EcEFOUJcUehWVygpoxGOUz5IwYiQ9pdbdNiQ5pBHqD4Ku2unDt0xh2mbg5vyniP3gB4rYiYjrujmRuHzXnJBxaC4cLP4W535q3/F44aZJanw0a5NiUReBLE2zujuQN43cAWOuQLAXN+8IZU0ga/dD2iRsgkFndVpsHk6gWGdlnH0gPxMvfK7mB2XeOGfoq0uFRHLdaM3XAkcy98iLHgbdyi9PNeCazwZjn4QC0GFxcwxyhpL7m5sW2J5g6njZI4ZUAh7XA2cyQM3y0B3zA9v8A9Wapqcxt3Q1xbdx1DtTc6cyV77wH7veLfdVOM12iXq/DDzzWQpn7zGnjofBY26u4cfib4jx1XO1sbhfwTxujAe1Ci6XDZja5hMcg8HbrvRxXAX6r6jxaiE9PNCf2scjP5mkL5hniLXFpyLSQRzGRWr+KyXBxM+qVpM8QEOKHFILroxDCkFEKSYDQgIukAFQcpKDymAwmk0oJQIaFG5TQM//Z'
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const param = parseInt(this.route.snapshot.params['id'], 10) - 1;
    this.devFront = this.devsFront[param];

    this.route.params.subscribe(
      (params: Params) => {
        // we can also use +params[id] to convert it to a number
        const currentId = parseInt(params['id'], 10) - 1 ;
        this.devFront = this.devsFront[currentId];
      });
  }

}